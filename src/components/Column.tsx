import type { ReactNode } from "react";
import { toRem, type ColumnDoc } from "../api/api";

interface Props extends ColumnDoc {
  children?: ReactNode;
}

function Column({
  gap = 0,
  children,
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
  borderColor = "#00000",
  borderSize = 0,
  borderType = "solid",
  ribbon = false,
  ribbonColor = "#FF0000",
  ribbonSide = "left",
  ribbonSize = 0,
  ribbonText = "",
  ribbonTextColor = "#000000",
  ribbonType = "corner",
  ribbonWithStripes = true,
  borderRadius = 0,
}: Props) {
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
    border: `${toRem(borderSize)} ${borderType} ${borderColor}`,
    boxShadow: `${toRem(boxShadowHorizontalOffset)} ${toRem(boxShadowVerticalOffset)} ${toRem(boxShadowBlurRadius)} ${toRem(boxShadowSpreadRadius)} ${boxShadowColor}`,
    filter: `drop-shadow(${toRem(dropShadowOffsetX)} ${toRem(
      dropShadowOffsetY,
    )} ${toRem(dropShadowBlurRadius)} ${dropShadowColor})`,
    borderRadius: toRem(borderRadius),
  };

  return (
    <div className={`flex flex-col`} style={style}>
      {children}
    </div>
  );
}

export default Column;
