import type { JSX } from "react";
import type { LayoutNode, BannerNode, ColumnNode, TextNode } from "../api/nodes";
import { registry } from "../registry/registry";

export function compileNode(node: LayoutNode): JSX.Element {
  if (node.type === "column") {
    const columnNode = node as ColumnNode;
    const ColumnComponent = registry.column;
    return (
      <ColumnComponent {...columnNode.props}>
        {columnNode.children?.map((child, index) => (
          <div key={index}>{compileNode(child)}</div>
        ))}
      </ColumnComponent>
    );
  }

  if (node.type === "banner") {
    const bannerNode = node as BannerNode;
    const BannerComponent = registry.banner;
    return <BannerComponent {...bannerNode.props} />;
  }

  if (node.type === "text") {
    const textNode = node as TextNode;
    const TextComponent = registry.text;
    return <TextComponent {...textNode.props} />;
  }

  // Exhaustive check
  const _exhaustive: never = node;
  return _exhaustive;
}
