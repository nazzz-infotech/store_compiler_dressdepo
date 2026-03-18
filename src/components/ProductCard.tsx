import apiUrl, {
  applyDiscount,
  fetchProduct,
  type GenericStyleDoc,
  type ProductType,
  toRem,
} from "../api/api";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import { Ribbon } from "react-ribbons";
import { useEffect, useState } from "react";

interface Props extends GenericStyleDoc {
  id: string;
}

function ProductCard({
  id,
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
  ribbonColor = "#388e3c",
  ribbonSide = "left",
  ribbonSize = "normal",
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
  const [data, setData] = useState<ProductType | null>();

  useEffect(() => {
    async function load() {
      const response = await fetchProduct(id);
      console.log(response);
      setData(response);
    }
    load();
  }, [id]);

  if (!data || data === null) {
    return <h4>Data is null for product card !</h4>;
  }

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
    <div className="flex! relative! items-center! justify-center! rounded-sm!" style={style}>
      <Box sx={{ position: "absolute", top: 0, left: 0, zIndex: 10, ml: 0.3 }}>
        {data.tagLine !== "EMT" ? (
          <Ribbon
            side={ribbonSide}
            type={ribbonType}
            size={ribbonSize}
            backgroundColor={ribbonColor}
            color={ribbonTextColor}
            fontFamily="arial"
            withStripes={ribbonWithStripes}
          >
            {data.tagLine}
          </Ribbon>
        ) : null}
      </Box>
      <Card>
        <a
          href={`https://dressdepo.com/product/${data._id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardActionArea title={data.title}>
            <CardMedia
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={`${apiUrl()}/images/${data.images.front}`}
                alt="Product image"
                height={350}
                width={200}
                className="block!"
              />
            </CardMedia>
            <Divider />
            <CardContent>
              <Typography variant="body1" fontSize={17.5}>
                {data.brand}
              </Typography>
              <div className="flex flex-row gap-1.5 items-center flex-wrap">
                <Typography variant="body1" fontSize={17}>
                  <b>₹{applyDiscount(data.price.mrp, data.price.discount)}</b>
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  <s>₹{data.price.mrp}</s>
                </Typography>
                <Typography variant="body2" color="primary">
                  ({data.price.discount}% Off)
                </Typography>
              </div>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
                className="mt-0.75!"
                fontSize={12.5}
              >
                {data.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </a>
        <Divider />
        <CardActions className="justify-center flex">
          <Button
            variant="contained"
            LinkComponent={"a"}
            href={`https://dressdepo.com/product/${data._id}?addtocart=true`}
            fullWidth
            startIcon={<AddShoppingCart />}
            target="_blank"
            rel="noopener noreferrer"
          >
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default ProductCard;
