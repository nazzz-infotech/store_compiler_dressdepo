import type { BannerDoc, ColumnDoc, TextDoc } from "./api";

export type BannerNode = {
  type: "banner";
  props: BannerDoc;
};

export type ColumnNode = {
  type: "column";
  props: ColumnDoc;
  children?: LayoutNode[];
};

export type TextNode = {
  type: "text";
  props: TextDoc;
  children?: LayoutNode[];
};

export type LayoutNode = BannerNode | ColumnNode | TextNode;
