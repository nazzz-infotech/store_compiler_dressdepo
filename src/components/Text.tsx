import type { ReactNode } from "react";
import { Typography } from "@mui/material";
// the only props this component needs
import type { TypographyVariant } from "@mui/material";

export interface TextDoc {
  text?: string;
  type?: TypographyVariant;
  textColor?: string;
  disableChildren?: boolean;
}

function Text({
  text = "",
  type = "body1", // 'type' renamed to 'variant' to match MUI standards
  textColor = "text.primary", // Support for theme-aware colors (e.g., 'primary.main')
  disableChildren = false,
  children,
}: TextDoc & { children?: ReactNode }) {
  return (
    <Typography
      variant={type}
      sx={{
        color: textColor,
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
        overflowWrap: "anywhere",
      }}
    >
      {text}
      {!disableChildren && children}
    </Typography>
  );
}

export default Text;
