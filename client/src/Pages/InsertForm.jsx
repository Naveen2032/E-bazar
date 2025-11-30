import { Box, Typography } from "@mui/material";
import React from "react";
import ProductForm from "../Components/ProductForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PageBanner from "../Components/PageBanner";
import { toast } from "react-toastify";
export default function InsertForm({ setLoading }) {
  let navigate = useNavigate();
  const handleProductInsert = (data) => {
    // console.log(data);
    let auth = localStorage.getItem("authToken") || "";
    axios
      .post("http://localhost:7000/user/insert-product", data, {
        headers: { "auth-token": auth },
      })
      .then((res) => {
        // console.log(res);
        if (res.data.success) {
          setLoading(true);
          setTimeout(() => {
            toast.success(res.data.message);
            navigate("/user-products");
            setLoading(false);
          }, 3000);
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <PageBanner
        title="Post New Product"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "My Products", path: "/user-products" },
          { label: "Post New Product", path: "/insert" },
        ]}
      />
      <Box sx={{ p: 5 }}>
        {/* <Box>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            Product Form
          </Typography>
        </Box> */}
        <Box>
          <ProductForm handleProductInsert={handleProductInsert} />
        </Box>
      </Box>
    </div>
  );
}
