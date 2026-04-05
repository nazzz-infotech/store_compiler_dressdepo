import type { JSX } from "react";
import type { LayoutNode, ComponentProps, Registry } from "../registry/registry";
import { registry } from "../registry/registry";
import React from "react";

// runtime type guard used to narrow a LayoutNode to the specific variant
// corresponding to a registry key.  This enables the compiler to know that
// `node.props` matches `ComponentProps[K]` below.
function isNodeOfType<K extends keyof Registry>(
  node: LayoutNode,
  type: K,
): node is LayoutNode<K> {
  return node.type === type;
}

export function compileNode(node: LayoutNode): JSX.Element {
  // iterate through the keys in the registry rather than using a generic
  // lookup; each iteration narrows the node type for the compiler.
  for (const key of Object.keys(registry) as Array<keyof Registry>) {
    if (isNodeOfType(node, key)) {
      const Component: React.ComponentType<ComponentProps[typeof key]> =
        registry[key] as React.ComponentType<ComponentProps[typeof key]>;
      return (
        <Component {...node.props}>
          {node.children?.map((child, index) => (
            <React.Fragment key={index}>{compileNode(child)}</React.Fragment>
          ))}
        </Component>
      );
    }
  }

  // if we reach here the node type wasn't in the registry (shouldn't happen)
  throw new Error(`no component registered for type "${node.type}"`);
}

