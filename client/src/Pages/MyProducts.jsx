import { Alert, Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import ProductTable from "../Components/ProductTable";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import PageBanner from "../Components/PageBanner";

export default function MyProducts({ user }) {
  const [products, setProducts] = useState([]);
  const [state, setState] = useState(true);
  console.log(user);
  useEffect(() => {
    let auth = localStorage.getItem("authToken") || "";

    axios
      .get("http://localhost:7000/user/view-product", {
        headers: { "auth-token": auth },
      })
      .then((res) => {
        if (res.data.success) {
          setProducts(res.data.products);
        }
        // alert(res.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [state]);
  //   console.log(products);
  return (
    <div>
      <PageBanner
        title="My Products"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "My Products", path: "/user-products" },
        ]}
      />
      <Box sx={{ p: 5 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", py: 2 }}>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            My Products
          </Typography>
          <Button
            sx={{
              background: "linear-gradient(to right,#4caf50 30%, #2e7d32 90%)",
              fontWeight: "bold",
            }}
            disabled={user?.phone ? false : true}
            component={Link}
            to={"/insert"}
            variant="contained"
            color="primary"
            // sx={{ float: "right" }}
          >
            New Post
          </Button>
        </Box>
        {!user?.phone && (
          <Box sx={{ py: 2 }}>
            <Alert severity="info">
              Please update your contact number to post the product
              <Button component={Link} to={`/profile`}>
                update profile
              </Button>
            </Alert>
          </Box>
        )}
        <Box>
          <ProductTable state={state} setState={setState} products={products} />
        </Box>
      </Box>
    </div>
  );
}
