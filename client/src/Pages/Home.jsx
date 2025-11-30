import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import ProductTable from "../Components/ProductTable";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";

export default function Home({ user }) {
  const [productsList, setProductsList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:7000/user/ViewAllProducts")
      .then((res) => {
        setProductsList(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Box>
        <Hero productsList={productsList} />
      </Box>
      <Box>
        <Banner user={user} />
      </Box>
    </div>
  );
}
