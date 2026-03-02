// the API file now delegates most of its type definitions to the
// `ComponentProps` helper exported by the registry.  When a new component is
// added to the registry its props type automatically becomes available here;
// there’s no need to touch this file again unless you want to define helper
// types such as `Parsed*` or the `toRem` utility.

// Import each component’s exported props type directly.  This avoids
// circular references between api ↔ registry ↔ components.
import type { BannerDoc as BannerProps } from "../components/Banner";
import type { ColumnDoc as ColumnProps } from "../components/Column";
import type { RowDoc as RowProps } from "../components/Row";
import type { TextDoc as TextProps } from "../components/Text";

// prop aliases that mirror the previous names so that other modules can still
// import `BannerDoc`, `ColumnDoc`, etc. (public API remains stable).  These
// are simply re‑exports of the original component types.
export type BannerDoc = BannerProps;
export type ColumnDoc = ColumnProps; // used for columns/rows
export type RowDoc = RowProps; // used for columns/rows
export type TextDoc = TextProps;

// (We no longer re-export ComponentProps; if someone needs the full map they
// can import from registry directly.)

// the rest of this file is basically unchanged; you could remove it entirely
// if it’s only consumed by the compiler, but keeping the parsing helpers makes
// the transition incremental.

export interface ParsedColumnDoc extends ColumnDoc {
  banner?: BannerDoc | BannerDoc[];
  text?: TextDoc | TextDoc[];
  row?: ParsedRowDoc | ParsedRowDoc[];
}

export interface ParsedRowDoc extends RowDoc {
  banner?: BannerDoc | BannerDoc[];
  text?: TextDoc | TextDoc[];
  column?: ParsedColumnDoc | ParsedColumnDoc[];
  row?: ParsedRowDoc | ParsedRowDoc[];
}

export interface StoreDoc {
  banner?: BannerDoc | BannerDoc[];
  column?: ParsedColumnDoc | ParsedColumnDoc[];
  row?: ParsedRowDoc | ParsedRowDoc[];
}

export type JustifyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "start"
  | "end"
  | "left"
  | "right"
  | "normal"
  | "stretch";

export type AlignItems =
  | "stretch"
  | "flex-start"
  | "flex-end"
  | "center"
  | "baseline"
  | "start"
  | "end"
  | "self-start"
  | "self-end"
  | "normal";

export interface GenericStyleDoc {
  padding?: number | string;
  paddingLeft?: number | string;
  paddingRight?: number | string;
  paddingTop?: number | string;
  paddingBottom?: number | string;
  margin?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  marginTop?: number | string;
  marginBottom?: number | string;
  backgroundColor?: string;
  textColor?: string;
  boxShadowHorizontalOffset?: number | string;
  boxShadowVerticalOffset?: number | string;
  boxShadowBlurRadius?: number | string;
  boxShadowSpreadRadius?: number | string;
  boxShadowColor?: string;
  dropShadowOffsetX?: number | string;
  dropShadowOffsetY?: number | string;
  dropShadowBlurRadius?: number | string;
  dropShadowColor?: string;
  borderColor?: string;
  borderSize?: number | string;
  borderType?: string;
  borderLeftColor?: string;
  borderLeftSize?: number | string;
  borderLeftType?: string;
  borderRightColor?: string;
  borderRightSize?: number | string;
  borderRightType?: string;
  borderTopColor?: string;
  borderTopSize?: number | string;
  borderTopType?: string;
  borderBottomColor?: string;
  borderBottomSize?: number | string;
  borderBottomType?: string;
  zIndex?: number | string;
  ribbon?: boolean;
  ribbonText?: string;
  ribbonColor?: string;
  ribbonTextColor?: string;
  ribbonSide?: "left" | "right";
  ribbonType?: "corner" | "edge";
  ribbonSize?: "normal" | "large";
  ribbonWithStripes?: boolean;
  borderRadius?: number | string;
  flexWrap?: boolean | string;
  alignItems?: AlignItems;
  justifyContent?: JustifyContent;
  flexGrow?: number;
}

// re-export the helper from utils so callers can continue importing
// from `api` without changing their imports.
export { toRem } from "../utils/style";
