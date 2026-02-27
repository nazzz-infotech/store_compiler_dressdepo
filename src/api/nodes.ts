import type { BannerDoc, ColumnDoc } from "./api";

export type BannerNode = {
  type: "banner";
  props: BannerDoc;
};

export type ColumnNode = {
  type: "column";
  props: ColumnDoc;
  children?: LayoutNode[];
};

export type LayoutNode = BannerNode | ColumnNode;
