import type { BannerDoc, ColumnDoc, TextDoc, RowDoc } from "./api";

export type BannerNode = {
  type: "banner";
  props: BannerDoc;
};

export type ColumnNode = {
  type: "column";
  props: ColumnDoc;
  children?: LayoutNode[];
};

export type RowNode = {
  type: "row";
  props: RowDoc;
  children?: LayoutNode[];
};

export type TextNode = {
  type: "text";
  props: TextDoc;
  children?: LayoutNode[];
};

export type LayoutNode = BannerNode | ColumnNode | RowNode | TextNode;
