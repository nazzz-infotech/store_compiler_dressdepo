import type { ReactNode } from "react";
import { Typography } from "@mui/material";

export interface BannerDoc {
  image: string;
  title: string;
  subtitle?: string;
  disableChildren?: boolean;
}

export function Banner({ image, title, subtitle, disableChildren = false, children }: BannerDoc & { children?: ReactNode }) {
  return (
    <div className="relative h-72 w-full">
      <img
        src={image}
        alt={"Banner Image"}
        className="w-full h-full object-cover"
      />
      <Typography
        variant="h4"
        className="absolute bottom-9.5 left-4 text-white drop-shadow-sm drop-shadow-black font-bold"
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        className="absolute bottom-3.25 left-4 text-white! drop-shadow-sm drop-shadow-black"
      >
        {subtitle}
      </Typography>
      {!disableChildren && children}
    </div>
  );
}
