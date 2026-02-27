// api/api.ts

export interface BannerDoc {
  title: string;
  subtitle?: string;
  image: string;
}

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
}

export interface ColumnDoc extends GenericComponentsProps {
  gap?: number | string;
}

// Extended column interface for parsed XML that may contain banner children
export interface ParsedColumnDoc extends ColumnDoc {
  banner?: BannerDoc | BannerDoc[];
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
