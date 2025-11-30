import { Box, Grid2, TextField, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "../Components/ProductCard";
import noData from "../Assets/no-data.webp";
import PageBanner from "../Components/PageBanner";
import Banner from "../Components/Banner";
export default function Products({ user, setLoading }) {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const auth = localStorage.getItem("authToken") || "";
    const url = user
      ? "http://localhost:7000/user/view-others-product"
      : "http://localhost:7000/user/ViewAllProducts";

    axios
      .get(url, { headers: user ? { "auth-token": auth } : {} })
      .then((res) => {
        if (res.data.success) {
          setProducts(res.data.products);
        }
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, [user]);
  const filteredProducts =
    searchTerm == ""
      ? products
      : products.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
  return (
    <div>
      <Box>
        <PageBanner
          title="Products"
          breadcrumbs={[
            { label: "Home", path: "/" },
            { label: "Products", path: "/products" },
          ]}
        />

        <Box sx={{ p: 2 }}>
          <TextField
            fullWidth
            label="search product here"
            placeholder="search product by title"
            type="search"
            value={searchTerm}
            onChange={(e) => {
              setLoading(true);
              setSearchTerm(e.target.value);
              setTimeout(() => {
                setLoading(false);
              }, 2000);
            }}
          />
        </Box>
        <Box sx={{ flexGrow: 1, p: 3 }}>
          <Grid2 container spacing={2}>
            {filteredProducts?.length > 0 ? (
              filteredProducts?.map((product, index) => (
                <Grid2
                  key={index}
                  size={{ xs: 12, sm: 6, lg: 3 }}
                  sx={{ p: 1 }}
                >
                  <ProductCard user={user} product={product} />
                </Grid2>
              ))
            ) : (
              <Box
                sx={{
                  height: "40vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <img src={noData} alt="picture" style={{ width: "300px" }} />
                <Typography sx={{ fontWeight: "500", color: "grey" }}>
                  no product found!
                </Typography>
              </Box>
            )}
          </Grid2>
        </Box>
      </Box>
      <Box>
        <Banner />
      </Box>
    </div>
  );
}
