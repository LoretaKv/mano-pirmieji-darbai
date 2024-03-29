import { type FC, useContext } from "react";
import { ProductsContext } from "../ProductsContext";
import type { TproductProps } from "./types";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { ProductActionButton } from "./ProductActionButton";

// export const Product = ({ product }: TproductProps) => {
export const Product: FC<TproductProps> = ({ product }) => {
  const { cartProducts, dispatch } = useContext(ProductsContext);

  const isProductInCart = cartProducts.some(
    (cartProduct) => cartProduct.id === product.id //To do: naudotume objekta
  );

  return (
    <Card
      sx={{
        maxWidth: 155,
        maxHeight: 400,
        p: 3,
      }}
    >
      <Typography variant="body2">{product.category}</Typography>

      <Typography
        sx={{
          textAlign: "center",
          maxHeight: "20px",
          color: "text.secondary",
          overflow: "hidden",
        }}
        variant="body2"
      >
        {product.title}
      </Typography>
      <Box
        sx={{
          "& img": {
            height: 100,
            maxWidth: 120,
            maxHeight: { xs: 233, md: 167 },
          },
        }}
      >
        <img alt={product.title || "Product image"} src={product.image} />
      </Box>

      <Typography> "$"{product.price}</Typography>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="10px"
        sx={{ "& button": { width: 30 } }}
      >
        <ProductActionButton
          title="+"
          type="addProduct"
          productId={product.id}
        />
        {isProductInCart ? (
          <ProductActionButton
            title="-"
            type="removeProduct"
            productId={product.id}
          />
        ) : null}
      </Box>
    </Card>
  );
};
