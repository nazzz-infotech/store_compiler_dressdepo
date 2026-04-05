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

export default function apiUrl() {
  return "https://storage.googleapis.com/dressdepo_storage_bucket";
}


/**
 * @param mrp 
 * @param selling 
 * @returns discount percentage
 */
export function getDiscountPercent(mrp: number, selling: number): number {
  if (mrp === 0) return 0;
  return Math.round(((mrp - selling) / mrp) * 100);
}

/**
 * @deprecated
 * @param price 
 * @param discountPercent 
 * @returns 
 */
export function applyDiscount(price: number, discountPercent: number) {
  const discounted = price - (price * discountPercent) / 100;
  return Math.floor(discounted); // round to nearest whole number
}

/**
 * Converts a numeric rating to an RGB color value.
 *
 * @param {number} rating - The rating value to convert (will be clamped between 1 and 5)
 * @returns {string} An RGB color string in the format 'rgb(r, g, b)' where red represents low ratings and green represents high ratings
 *
 * @example
 * getRatingColor(1) // returns 'rgb(235, 30, 75)' - red
 * getRatingColor(5) // returns 'rgb(18, 140, 39)' - green
 * getRatingColor(3) // returns 'rgb(129, 114, 64)' - orange/brown
 */
export function getRatingColor(rating: number) {
  // Clamp rating between 1 and 5
  const value = Math.min(5, Math.max(1, rating));

  // Normalize (1 → 0, 5 → 1)
  const t = (value - 1) / 4;

  // Start (red) and end (green) colors
  const start = { r: 235, g: 30, b: 75 }; // #eb1e4b
  const end = { r: 18, g: 140, b: 39 }; // #128c27

  // Interpolate
  const r = Math.round(start.r + (end.r - start.r) * t);
  const g = Math.round(start.g + (end.g - start.g) * t);
  const b = Math.round(start.b + (end.b - start.b) * t);

  return `rgb(${r}, ${g}, ${b})`;
}

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
  rotate?: number;
}

export type ProductType = {
  _id: string;
  title: string;
  description: string;
  type: string;
  occasion: string;
  color: string;
  images: {
    front: string;
    back: string;
    side: string;
    other: string;
    other1: string;
    other2: string;
    other3: string;
  };
  sizes: string[];
  price: { mrp: number; selling_price: number };
  article: string;
  fabric: string;
  pattern: string;
  inventory: Record<string, number>;
  productCode: string;
  colorCode: string;
  gender: string;
  tagLine: string;
  sleeve: string;
  brand: string;
  hsn: number;
  gst: number;
  origin: number;
  seller_contact_number: number;
  seller_email_address: string;
  seller_id: string;
};

export async function fetchProduct(id: string): Promise<ProductType | undefined> {
  const response = await fetch(
    `/api/get-item?id=${id}`,
  );
  if (response.status === 404) {
    alert("Product not found");
    return undefined;
  }
  if (response.status === 400) {
    alert("id not found");
    return undefined;
  }
  const json = await response.json();
  return json.data;
}

// re-export the helper from utils so callers can continue importing
// from `api` without changing their imports.
export { toRem } from "../utils/style";
