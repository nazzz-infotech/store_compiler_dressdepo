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
}: Props) {


  const gapRem = toRem(gap);
  const style: React.CSSProperties = {
    gap: gapRem,
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
  };

  return (
    <div className="flex flex-col" style={style}>
      {children}
    </div>
  );
}

export default Column;
