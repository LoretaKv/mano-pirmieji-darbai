import Box from "@mui/material/Box";
import type { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export const Header: FC = () => {
  const { pathname } = useLocation();
  const isOnCartLink = pathname.includes("/cart");

  return (
    <Box component={"header"} textAlign="center" margin="0 auto" width="600px">
      <Typography variant="h3" padding={2} fontWeight="300" fontSize="44px">
        {isOnCartLink ? "CART" : "PRODUCTS"}
      </Typography>

      <Grid
        container
        textAlign="center"
        mb={2}
        sx={{
          "& a": {
            color: "purple",
            textDecoration: "none",
            ":hover": { color: "red" },
          },
        }}
      >
        <Grid item xs={12} sm={6}>
          <Link to="/">
            <Typography fontSize=" 32px">Home</Typography>
          </Link>
        </Grid>

        <Grid item xs={6}>
          <Link to="/cart">
            <Typography fontSize=" 32px">Cart</Typography>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};
