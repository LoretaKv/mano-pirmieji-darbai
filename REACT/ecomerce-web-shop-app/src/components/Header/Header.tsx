import Box from "@mui/material/Box";
import type { FC } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export const Header: FC = () => {
  return (
    <Box component={"header"}>
      <Typography component="h2" margin={4} sx={{ textAlign: "center" }}>
        FANCY SHOP
      </Typography>

      <Grid container textAlign="center" mb={2}>
        <Grid item xs={6}>
          <Link to="/">Home</Link>
        </Grid>

        <Grid item xs={6}>
          <Link to="/cart">Cart</Link>
        </Grid>
      </Grid>
    </Box>
  );
};
