import type { ReactNode } from "react";
import { toRem } from "../../utils/style";
import { Ribbon } from "react-ribbons";
import type { GenericStyleDoc } from "../../api/api";
import "./Grid.css";

export interface ResponsiveGridDoc extends GenericStyleDoc {
  gap?: number | string;
  disableChildren?: boolean;
  xsCols: number | string;
  smCols: number | string;
  mdCols: number | string;
  lgCols: number | string;
  xlCols: number | string;
  xxlCols: number | string;
  cols: number | string;
}

interface Props extends ResponsiveGridDoc {
  children?: ReactNode;
}

function ResponsiveGrid({
  gap = 0,
  children,
  disableChildren = false,
  padding = 0,
  paddingBottom = 0,
  paddingLeft = 0,
  paddingRight = 0,
  paddingTop = 0,
  margin = 0,
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
  marginTop = 0,
  backgroundColor = "#ffffff",
  textColor = "#000000",
  boxShadowHorizontalOffset = 0,
  boxShadowVerticalOffset = 0,
  boxShadowBlurRadius = 0,
  boxShadowSpreadRadius = 0,
  boxShadowColor = "#000000",
  dropShadowOffsetX = 0,
  dropShadowOffsetY = 0,
  dropShadowBlurRadius = 0,
  dropShadowColor = "#000000",
  borderColor = "#000000",
  borderSize = 0,
  borderType = "solid",
  borderLeftColor = "#000000",
  borderLeftSize = 0,
  borderLeftType = "solid",
  borderRightColor = "#000000",
  borderRightSize = 0,
  borderRightType = "solid",
  borderTopColor = "#000000",
  borderTopSize = 0,
  borderTopType = "solid",
  borderBottomColor = "#000000",
  borderBottomSize = 0,
  borderBottomType = "solid",
  zIndex = 0,
  ribbon = false,
  ribbonColor = "#388e3c",
  ribbonSide = "left",
  ribbonSize = "normal",
  ribbonText = "",
  ribbonTextColor = "#ffffff",
  ribbonType = "corner",
  ribbonWithStripes = true,
  borderRadius = 0,
  alignItems = "stretch",
  rotate = 0,
  xsCols = 2,
  smCols = 3,
  mdCols = 4,
  lgCols = 5,
  xlCols = 6,
  xxlCols = 7,
}: Props) {
  const hasMainBorder = Number(borderSize) > 0;

  /* Fix padding */
  if (paddingTop === 0) paddingTop = padding;
  if (paddingBottom === 0) paddingBottom = padding;
  if (paddingRight === 0) paddingRight = padding;
  if (paddingLeft === 0) paddingLeft = padding;

  /* Fix margin */
  if (marginTop === 0) marginTop = margin;
  if (marginBottom === 0) marginBottom = margin;
  if (marginRight === 0) marginRight = margin;
  if (marginLeft === 0) marginLeft = margin;

  const style: React.CSSProperties & {
    "--cols-xs"?: number | string;
    "--cols-sm"?: number | string;
    "--cols-md"?: number | string;
    "--cols-lg"?: number | string;
    "--cols-xl"?: number | string;
    "--cols-xxl"?: number | string;
  } = {
    display: "grid",
    gap: toRem(gap),
    padding: toRem(padding),
    paddingBottom: toRem(paddingBottom),
    paddingLeft: toRem(paddingLeft),
    paddingRight: toRem(paddingRight),
    paddingTop: toRem(paddingTop),
    margin: toRem(margin),
    marginBottom: toRem(marginBottom),
    marginLeft: toRem(marginLeft),
    marginRight: toRem(marginRight),
    marginTop: toRem(marginTop),
    backgroundColor,
    color: textColor,

    // 1 Apply main border first (fallback)
    ...(hasMainBorder && {
      border: `${toRem(borderSize)} ${borderType} ${borderColor}`,
    }),

    // 2 Override individual sides only if provided
    ...(Number(borderLeftSize) > 0 && {
      borderLeft: `${toRem(borderLeftSize)} ${borderLeftType} ${borderLeftColor}`,
    }),

    ...(Number(borderRightSize) > 0 && {
      borderRight: `${toRem(borderRightSize)} ${borderRightType} ${borderRightColor}`,
    }),

    ...(Number(borderTopSize) > 0 && {
      borderTop: `${toRem(borderTopSize)} ${borderTopType} ${borderTopColor}`,
    }),

    ...(Number(borderBottomSize) > 0 && {
      borderBottom: `${toRem(borderBottomSize)} ${borderBottomType} ${borderBottomColor}`,
    }),

    boxShadow: `${toRem(boxShadowHorizontalOffset)} ${toRem(
      boxShadowVerticalOffset,
    )} ${toRem(boxShadowBlurRadius)} ${toRem(boxShadowSpreadRadius)} ${boxShadowColor}`,

    filter: `drop-shadow(${toRem(dropShadowOffsetX)} ${toRem(
      dropShadowOffsetY,
    )} ${toRem(dropShadowBlurRadius)} ${dropShadowColor})`,

    borderRadius: toRem(borderRadius),
    zIndex: Number(zIndex) + 10,
    alignItems: alignItems,
    rotate: `${rotate}deg`,
    "--cols-xs": xsCols,
    "--cols-sm": smCols,
    "--cols-md": mdCols,
    "--cols-lg": lgCols,
    "--cols-xl": xlCols,
    "--cols-xxl": xxlCols,
  };

  return (
    <div className="relative">
      {ribbon && (
        <div className="absolute top-0 left-0 z-50">
          <Ribbon
            side={ribbonSide}
            type={ribbonType}
            size={ribbonSize}
            backgroundColor={ribbonColor}
            color={ribbonTextColor}
            fontFamily="arial"
            withStripes={ribbonWithStripes}
          >
            {ribbonText}
          </Ribbon>
        </div>
      )}

      <div className="relative z-10 responsive_grid" style={style}>
        {!disableChildren && children}
      </div>
    </div>
  );
}

export default ResponsiveGrid;
