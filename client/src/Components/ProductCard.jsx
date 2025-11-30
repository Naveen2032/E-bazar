import * as React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Paper,
  Box,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";

export default function ProductCard({ product, user }) {
  let navigate = useNavigate();
  const loadProduct = () => {
    navigate(user ? `/view-product/${product?._id}` : "/login");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Paper
      onClick={loadProduct}
      sx={{
        width: 320,
        borderRadius: 3,
        overflow: "hidden",
        textDecoration: "none",
        boxShadow: 2,
        transition: "0.3s ease-in-out",
        "&:hover": {
          boxShadow: 6,
          transform: "scale(1.02)",
        },
      }}
    >
      {/* Product Image */}
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="250"
          image={`http://localhost:7000/uploads/product/${product?.picture}`}
          alt={product?.title}
          sx={{
            objectFit: "cover",
            borderBottom: "3px solid #4caf50",
          }}
        />
      </Box>

      {/* Product Details */}
      <CardContent sx={{ p: 2 }}>
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            mb: 1,
          }}
        >
          {product?.title}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {moment(product?.createdAt).fromNow()}
        </Typography>

        <Typography variant="h6" color="primary" fontWeight="bold">
          ₹{product?.price}
        </Typography>
      </CardContent>
    </Paper>
  );
}
