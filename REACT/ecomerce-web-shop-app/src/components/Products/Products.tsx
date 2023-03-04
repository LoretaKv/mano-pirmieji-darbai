import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "..";
import axios from "axios";
import { Product } from "./Product";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";

export const Products = () => {
  const { dispatch, fetchedProducts } = useContext(ProductsContext);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) =>
        dispatch({
          type: "setProducts",
          payload: { fetchedProducts: res.data },
        })
      )
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <Box>
          <h1>PRODUCTS</h1>
          <Grid
            sx={{
              p: 2,
              bgcolor: "background.default",
              display: "grid",
              gridTemplateColumns: { md: "1fr 1fr 1fr 1fr" },
              gap: 5,
              maxHeight: "100px",
              maxWidth: 3000,
            }}
          >
            {fetchedProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </Grid>
        </Box>
      )}
    </>
  );
};
