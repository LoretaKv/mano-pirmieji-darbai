import { type FC, useContext } from "react";
import { ProductsContext } from "../ProductsContext";
import type { TproductProps } from "./types";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

// export const Product = ({ product }: TproductProps) => {
export const Product: FC<TproductProps> = ({ product }) => {
  const { dispatch } = useContext(ProductsContext);

  //   <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  //   {Array.from(Array(6)).map((_, index) => (
  //     <Grid item xs={2} sm={4} md={4} key={index}>
  //       <Item>xs=2</Item>
  //     </Grid>
  //   ))}
  // </Grid>

  return (
    <Card
      sx={{
        maxWidth: 345,
        p: 3,
      }}
    >
      <Typography variant="body2">{product.category}</Typography>
      <Typography gutterBottom variant="h5">
        {product.title}
      </Typography>

      <Box
        component="img"
        sx={{
          height: 180,
          width: 150,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="No image available"
        src={product.image}
      />
      {/* <Typography variant="body2" color="text.secondary">
        {product.description}
      </Typography> */}

      <Typography> "$"{product.price}</Typography>

      <button
        onClick={() =>
          dispatch({ type: "addProduct", payload: { productId: product.id } })
        }
      >
        Add Product
      </button>
    </Card>
  );
};
