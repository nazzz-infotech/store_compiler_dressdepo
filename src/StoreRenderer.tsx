import { parseXml } from "./parser/parseXml";
import { compileNode } from "./compiler/compileNode";
import type { StoreDoc, ParsedColumnDoc } from "./api/api";
import type { LayoutNode } from "./api/nodes";

type Props = {
  xml: string;
};

function convertStoreToNodes(store: StoreDoc): LayoutNode[] {
  const nodes: LayoutNode[] = [];

  // Handle banner elements
  if (store.banner) {
    const banners = Array.isArray(store.banner) ? store.banner : [store.banner];
    banners.forEach((banner) => {
      nodes.push({
        type: "banner",
        props: banner,
      });
    });
  }

  // Handle column elements
  if (store.column) {
    const columns = Array.isArray(store.column) ? store.column : [store.column];
    columns.forEach((column: ParsedColumnDoc) => {
      // copy all props from parsed column; gap, padding, margin, etc.
      const { banner, ...rest } = column;
      const columnNode: LayoutNode = {
        type: "column",
        props: rest,
        children: [],
      };

      // Handle children inside column
      if (banner) {
        const banners = Array.isArray(banner) ? banner : [banner];
        banners.forEach((b) => {
          columnNode.children?.push({
            type: "banner",
            props: b,
          });
        });
      }

      nodes.push(columnNode);
    });
  }

  return nodes;
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
