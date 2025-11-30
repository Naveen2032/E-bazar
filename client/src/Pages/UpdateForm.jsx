import { Box, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductUpdateForm from "../Components/ProductUpdateForm";
import PageBanner from "../Components/PageBanner";
import { toast } from "react-toastify";

export default function UpdateForm({ setLoading }) {
  let navigate = useNavigate();
  const [singleProduct, setSingleProduct] = useState(null);
  // const params = useParams();
  // console.log(params.id);
  const { id } = useParams();
  // console.log(id);
  useEffect(() => {
    let auth = localStorage.getItem("authToken") || "";
    axios
      .get(`http://localhost:7000/user/view-single-product/${id}`, {
        headers: { "auth-token": auth },
      })
      // .get('http://localhost:7000/user/view-single-product/'+id)
      .then((res) => {
        // console.log(res.data);
        if (res.data.success) {
          setSingleProduct(res.data.product);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  const handleProductUpdate = (data) => {
    // console.log(data);
    let auth = localStorage.getItem("authToken") || "";
    axios
      .put(`http://localhost:7000/user/update-product/${id}`, data, {
        headers: { "auth-token": auth },
      })
      .then((res) => {
        // console.log(res.data);
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
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <PageBanner
        title="Update Product"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "My Products", path: "/user-products" },
          { label: "Update Product", path: "/insert" },
        ]}
      />
      <Box sx={{ p: 5 }}>
        {/* <Box>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            Product Form
          </Typography>
        </Box> */}
        <Box>
          <ProductUpdateForm
            singleProduct={singleProduct}
            setSingleProduct={setSingleProduct}
            handleProductUpdate={handleProductUpdate}
          />
        </Box>
      </Box>
    </div>
  );
}
