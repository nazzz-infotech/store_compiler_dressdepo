import { Typography } from "@mui/material";
// the only props this component needs
import type { TypographyVariant } from "@mui/material";

export interface TextDoc {
  text?: string;
  type?: TypographyVariant;
  textColor?: string;
}

function Text({
  text = "",
  type = "body1", // 'type' renamed to 'variant' to match MUI standards
  textColor = "text.primary", // Support for theme-aware colors (e.g., 'primary.main')
}: TextDoc) {
  return (
    <Typography
      variant={type}
      sx={{
        color: textColor,
      }}
    >
      {text}
    </Typography>
  );
}

export default Text;
