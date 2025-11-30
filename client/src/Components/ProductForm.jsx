import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductForm({ handleProductInsert }) {
  const [productData, setProductData] = useState({});
  const handleSubmit = () => {
    // console.log(productData);
    const data = new FormData();
    data.append("title", productData.title);
    data.append("category", productData.category);
    data.append("price", productData.price);
    data.append("picture", productData.picture);
    data.append("description", productData.description);
    // console.log(data);
    handleProductInsert(data);
  };
  return (
    <div>
      <Box
        sx={{
          // p: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper sx={{ p: 5, width: "100%" }}>
          <Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Product Form
            </Typography>
          </Box>
          <TextField
            name="title"
            onChange={(e) =>
              setProductData({
                ...productData,
                [e.target.name]: e.target.value,
              })
            }
            sx={{ mb: 1 }}
            label="Product Title"
            fullWidth
          />
          <TextField
            name="category"
            onChange={(e) =>
              setProductData({
                ...productData,
                [e.target.name]: e.target.value,
              })
            }
            sx={{ mb: 1 }}
            label="Product Category"
            fullWidth
          />
          <TextField
            name="price"
            onChange={(e) =>
              setProductData({
                ...productData,
                [e.target.name]: e.target.value,
              })
            }
            sx={{ mb: 1 }}
            type="number"
            label="Product Price"
            fullWidth
          />
          <TextField
            name="picture"
            onChange={(e) => {
              setProductData({
                ...productData,
                [e.target.name]: e.target.files[0],
              });
            }}
            sx={{ mb: 1 }}
            type="file"
            label="Product Picture"
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
          <TextField
            name="description"
            onChange={(e) =>
              setProductData({
                ...productData,
                [e.target.name]: e.target.value,
              })
            }
            sx={{ mb: 1 }}
            label="Product Description"
            multiline
            rows={2}
            fullWidth
          />
          <Button
            onClick={handleSubmit}
            variant="contained"
            fullWidth
            sx={{ mt: 1, p: 1 }}
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            sx={{ mt: 1, p: 1 }}
            component={Link}
            to={"/"}
          >
            View Products
          </Button>
        </Paper>
      </Box>
    </div>
  );
}
