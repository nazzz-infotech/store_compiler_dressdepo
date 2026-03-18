import type { ReactNode } from "react";
import { toRem } from "../utils/style";
import { Ribbon } from "react-ribbons";
import type { GenericStyleDoc } from "../api/api";

export interface RowDoc extends GenericStyleDoc {
  gap?: number | string;
  disableChildren?: boolean;
}

interface Props extends RowDoc {
  children?: ReactNode;
}

function Row({
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
  flexWrap = false,
  alignItems = "stretch",
  justifyContent = "flex-start",
  flexGrow = 0,
  rotate = 0,
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

  const style: React.CSSProperties = {
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
    // treat string/boolean values the same way; only 'true' enables wrapping
    flexWrap: flexWrap === true || flexWrap === "true" ? "wrap" : "unset",
    alignItems: alignItems,
    justifyItems: justifyContent,
    flexGrow: flexGrow,
    rotate: `${rotate}deg`,
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

      <div className="flex flex-row relative z-10" style={style}>
        {!disableChildren && children}
      </div>
    </div>
  );
}

export default Row;
