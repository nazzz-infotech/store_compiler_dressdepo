import { parseXml } from "./parser/parseXml";
import { compileNode } from "./compiler/compileNode";
import type { StoreDoc, ParsedColumnDoc, ParsedRowDoc, BannerDoc, TextDoc, ColumnDoc, RowDoc } from "./api/api";
import type { LayoutNode, BannerNode, TextNode, ColumnNode, RowNode } from "./api/nodes";

type Props = {
  xml: string;
};

function convertStoreToNodes(store: StoreDoc): LayoutNode[] {
  const nodes: LayoutNode[] = [];

  // Handle banner elements
  if (store.banner) {
    const banners = Array.isArray(store.banner) ? store.banner : [store.banner];
    banners.forEach((banner: BannerDoc) => {
      const bannerNode: BannerNode = {
        type: "banner",
        props: banner,
      };
      nodes.push(bannerNode);
    });
  }

  // Handle row elements at top-level
  if (store.row) {
    const rows = Array.isArray(store.row) ? store.row : [store.row];
    rows.forEach((r: ParsedRowDoc) => {
      nodes.push(convertParsedToNode(r, "row"));
    });
  }

  // Handle column elements
  if (store.column) {
    const columns = Array.isArray(store.column) ? store.column : [store.column];
    columns.forEach((column: ParsedColumnDoc) => {
      nodes.push(convertParsedToNode(column, "column"));
    });
  }

  return nodes;
}

function convertParsedToNode(
  parsed: ParsedColumnDoc | ParsedRowDoc,
  type: "column" | "row",
): LayoutNode {
  // Extract child elements and base props
  const {
    banner: bannerChildren,
    text: textChildren,
    column: columnChildren,
    row: rowChildren,
    ...baseProps
  } = parsed as ParsedColumnDoc & ParsedRowDoc;

  // Create the base node with proper typing
  const node: ColumnNode | RowNode =
    type === "column"
      ? {
          type: "column",
          props: baseProps as ColumnDoc,
          children: [],
        }
      : {
          type: "row",
          props: baseProps as RowDoc,
          children: [],
        };

  // Handle banner children
  if (bannerChildren) {
    const banners = Array.isArray(bannerChildren) ? bannerChildren : [bannerChildren];
    banners.forEach((banner: BannerDoc) => {
      const bannerNode: BannerNode = {
        type: "banner",
        props: banner,
      };
      (node.children ||= []).push(bannerNode);
    });
  }

  // Handle text children
  if (textChildren) {
    const texts = Array.isArray(textChildren) ? textChildren : [textChildren];
    texts.forEach((text: TextDoc) => {
      const textNode: TextNode = {
        type: "text",
        props: text,
      };
      (node.children ||= []).push(textNode);
    });
  }

  // Handle nested column children
  if (columnChildren) {
    const columns = Array.isArray(columnChildren) ? columnChildren : [columnChildren];
    columns.forEach((column: ParsedColumnDoc) => {
      (node.children ||= []).push(convertParsedToNode(column, "column"));
    });
  }

  // Handle nested row children
  if (rowChildren) {
    const rows = Array.isArray(rowChildren) ? rowChildren : [rowChildren];
    rows.forEach((row: ParsedRowDoc) => {
      (node.children ||= []).push(convertParsedToNode(row, "row"));
    });
  }

  return node;
}

export function StoreRenderer({ xml }: Props) {
  const parsed = parseXml(xml) as { store?: StoreDoc };

  if (!parsed.store) {
    return null;
  }

  const nodes = convertStoreToNodes(parsed.store);

  return (
    <>
      {nodes.map((node, index) => (
        <div key={index}>{compileNode(node)}</div>
      ))}
    </>
  );
}
