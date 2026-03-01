// this file exists only for compatibility; the real definition lives in
// `registry/registry.ts` so that new components don’t require touching
// several different places.  Export whatever the registry exports so that
// other code (including tests or external consumers) can keep importing from
// `./api/nodes` if they prefer.

import type { LayoutNode as RegistryLayoutNode } from "../registry/registry";

export type LayoutNode = RegistryLayoutNode;
