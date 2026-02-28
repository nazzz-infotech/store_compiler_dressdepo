// api/api.ts

import { type TypographyVariant } from "@mui/material";

export interface BannerDoc {
  title: string;
  subtitle?: string;
  image: string;
}

export type BorderTypes =
  | "none"
  | "hidden"
  | "solid"
  | "dotted"
  | "dashed"
  | "double"
  | "groove"
  | "ridge"
  | "inset"
  | "outset";

export interface GenericComponentsProps {
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
  borderSize?: number | string;
  borderColor?: string;
  borderType?: BorderTypes;
  borderLeftSize?: number | string;
  borderLeftColor?: string;
  borderLeftType?: BorderTypes;
  borderRightSize?: number | string;
  borderRightColor?: string;
  borderRightType?: BorderTypes;
  borderTopSize?: number | string;
  borderTopColor?: string;
  borderTopType?: BorderTypes;
  borderBottomSize?: number | string;
  borderBottomColor?: string;
  borderBottomType?: BorderTypes;
  boxShadowHorizontalOffset?: number | string;
  boxShadowVerticalOffset?: number | string;
  boxShadowBlurRadius?: number | string;
  boxShadowSpreadRadius?: number | string;
  boxShadowColor?: string;
  dropShadowOffsetX?: number | string;
  dropShadowOffsetY?: number | string;
  dropShadowBlurRadius?: number | string;
  dropShadowColor?: string;
  ribbon?: boolean;
  ribbonText?: string;
  ribbonColor?: string;
  ribbonTextColor?: string;
  ribbonSide?: "left" | "right";
  ribbonType?: "corner" | "edge";
  ribbonSize?: "normal" | "large";
  ribbonWithStripes?: boolean;
  borderRadius?: number | string;
  zIndex?: number | string;
}

export interface ColumnDoc extends GenericComponentsProps {
  gap?: number | string;
}

export interface TextDoc extends GenericComponentsProps {
  text: string;
  type: TypographyVariant;
}

// Extended column interface for parsed XML that may contain banner and text children
export interface ParsedColumnDoc extends ColumnDoc {
  banner?: BannerDoc | BannerDoc[];
  text?: TextDoc | TextDoc[];
}

// This represents the raw parsed XML structure
export interface StoreDoc {
  banner?: BannerDoc | BannerDoc[];
  column?: ParsedColumnDoc | ParsedColumnDoc[];
}

export function toRem(value?: number | string) {
  if (value === undefined || value === null) return undefined;
  const num = typeof value === "string" ? parseInt(value, 10) : value;
  if (isNaN(num)) return undefined;
  return `${num * 0.25}rem`;
}
