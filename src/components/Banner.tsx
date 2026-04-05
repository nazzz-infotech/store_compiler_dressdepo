import type { ReactNode } from "react";
import { Typography } from "@mui/material";

export interface BannerDoc {
  image: string;
  title: string;
  subtitle?: string;
  disableChildren?: boolean;
}

export function Banner({
  image,
  title,
  subtitle,
  disableChildren = false,
  children,
}: BannerDoc & { children?: ReactNode }) {
  return (
    <div className="dsc:relative dsc:h-72 dsc:w-full">
      <img
        src={image}
        alt={"Banner Image"}
        className="dsc:w-full dsc:h-full dsc:object-cover"
        loading="eager"
      />
      <Typography
        variant="h4"
        className="dsc:absolute dsc:bottom-9.5 dsc:left-4 dsc:text-white dsc:drop-shadow-sm dsc:drop-shadow-black dsc:font-bold"
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        className="dsc:absolute dsc:bottom-3.25 dsc:left-4 dsc:text-white! dsc:drop-shadow-sm dsc:drop-shadow-black"
      >
        {subtitle}
      </Typography>
      {!disableChildren && children}
    </div>
  );
}

