import React from "react";
import { parseXml } from "./parser/parseXml";
import { compileNode } from "./compiler/compileNode";
import { registry } from "./registry/registry";
import type { LayoutNode } from "./registry/registry";

// opaque shape for parsed XML objects; they may contain strings or nested
// objects/arrays but not functions, so Record<string, unknown> is a decent fit.
type XmlObject = Record<string, unknown>;

// Props for the renderer
interface Props {
  xml: string;
}

function convertParsedToNode(parsed: XmlObject, type: keyof typeof registry): LayoutNode {
  const children: LayoutNode[] = [];

  // recursively turn registered child elements into nodes
  Object.entries(parsed).forEach(([key, value]) => {
    if (key === "#text") return; // ignore parser text nodes
    if (key in registry) {
      const compKey = key as keyof typeof registry;
      const items = Array.isArray(value) ? value : [value];
      items.forEach(item => {
        if (typeof item === "object" && item !== null) {
          children.push(convertParsedToNode(item as XmlObject, compKey));
        }
      });
    }
  });

  // props are everything except recognized children keys
  const props: XmlObject = { ...parsed };
  (Object.keys(registry) as Array<keyof typeof registry>).forEach(childKey => {
    if (props[childKey] !== undefined) {
      delete props[childKey];
    }
  });

  return { type, props: props as LayoutNode["props"], children: children.length ? children : undefined };
}

function convertStoreToNodes(store: XmlObject): LayoutNode[] {
  const nodes: LayoutNode[] = [];

  Object.entries(store).forEach(([key, value]) => {
    if (key === "#text") return;
    if (!(key in registry)) return;
    const compKey = key as keyof typeof registry;
    const items = Array.isArray(value) ? value : [value];
    items.forEach(item => {
      if (typeof item === "object" && item !== null) {
        nodes.push(convertParsedToNode(item as XmlObject, compKey));
      }
    });
  });

  return nodes;
}

export function StoreRenderer({ xml }: Props) {
  const parsedUnknown = parseXml(xml);
  if (typeof parsedUnknown !== "object" || parsedUnknown === null) {
    return null;
  }

  const parsed = parsedUnknown as XmlObject;
  const store = parsed.store;
  if (typeof store !== "object" || store === null) {
    return null;
  }

  const nodes = convertStoreToNodes(store as XmlObject);

  return (
    <>
      {nodes.map((node, index) => (
        <React.Fragment key={index}>{compileNode(node)}</React.Fragment>
      ))}
    </>
  );
}
