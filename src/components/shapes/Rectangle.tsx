import { Ribbon } from "react-ribbons";
import { toRem } from "../../utils/style";

// props defined in component so registry/api can import without cycle
export interface RectangleDoc {
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
  boxShadowHorizontalOffset?: number | string;
  boxShadowVerticalOffset?: number | string;
  boxShadowBlurRadius?: number | string;
  boxShadowSpreadRadius?: number | string;
  boxShadowColor?: string;
  dropShadowOffsetX?: number | string;
  dropShadowOffsetY?: number | string;
  dropShadowBlurRadius?: number | string;
  dropShadowColor?: string;
  borderColor?: string;
  borderSize?: number | string;
  borderType?: string;
  borderLeftColor?: string;
  borderLeftSize?: number | string;
  borderLeftType?: string;
  borderRightColor?: string;
  borderRightSize?: number | string;
  borderRightType?: string;
  borderTopColor?: string;
  borderTopSize?: number | string;
  borderTopType?: string;
  borderBottomColor?: string;
  borderBottomSize?: number | string;
  borderBottomType?: string;
  zIndex?: number | string;
  ribbon?: boolean;
  ribbonText?: string;
  ribbonColor?: string;
  ribbonTextColor?: string;
  ribbonSide?: "left" | "right";
  ribbonType?: "corner" | "edge";
  ribbonSize?: "normal" | "large";
  ribbonWithStripes?: boolean;
  borderRadius?: number | string;
  flexWrap?: boolean | string;
  height?: number;
  width?: number;
}

function Rectangle({
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
  height = 16,
  width = 16,
}: RectangleDoc) {
  const hasMainBorder = Number(borderSize) > 0;

  const style: React.CSSProperties = {
    height: toRem(height),
    width: toRem(width),
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
    flexWrap: flexWrap === "true" ? "wrap" : "unset",
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
      <div className="relative z-10" style={style} />
    </div>
  );
}

export default Rectangle;
