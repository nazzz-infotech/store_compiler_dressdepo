import { Typography } from "@mui/material";
import type { TextDoc } from "../api/api";

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
