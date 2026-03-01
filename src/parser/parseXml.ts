import { XMLParser } from "fast-xml-parser";

// parseXml returns an opaque object structure produced by fast-xml-parser.
// The caller is responsible for narrowing it to the shapes we expect, so we
// keep the return type as `unknown` instead of `any`.
export function parseXml(xml: string): unknown {
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "",
  });

  return parser.parse(xml);
}
