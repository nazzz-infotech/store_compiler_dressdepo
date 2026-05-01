import type { ReactNode } from "react";
import { Typography } from "@mui/material";
import { hexToRgba } from "../api/api";

export interface BannerDoc {
  image: string;
  title: string;
  subtitle?: string;
  disableChildren?: boolean;
  backdropColor: string;
  backdropOpacity: string | number;
}

export function Banner({
  image,
  title,
  subtitle,
  disableChildren = false,
  children,
  backdropColor,
  backdropOpacity,
}: BannerDoc & { children?: ReactNode }) {
  return (
    <div className="dsc:relative dsc:h-72 dsc:w-full">
      <img
        src={image}
        alt={"Banner Image"}
        className="dsc:w-full dsc:h-full dsc:object-cover"
        loading="eager"
      />
      <div
        className="dsc:absolute dsc:top-0 dsc:left-0 dsc:w-full dsc:h-full"
        style={{
          backgroundColor: hexToRgba(backdropColor, Number(backdropOpacity)),
        }}
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
