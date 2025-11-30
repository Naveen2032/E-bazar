import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function ProductUpdateForm({
  singleProduct,
  setSingleProduct,
  handleProductUpdate,
}) {
  const handleSubmit = () => {
    const data = new FormData();
    data.append("title", singleProduct.title);
    data.append("category", singleProduct.category);
    data.append("price", singleProduct.price);
    data.append("picture", singleProduct.picture);
    data.append("description", singleProduct.description);
    handleProductUpdate(data);
  };
  //   console.log(singleProduct);
  return (
    <div>
      <Box
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper sx={{ p: 5, width: "100%" }}>
          <Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Product Update Form
            </Typography>
          </Box>
          <TextField
            name="title"
            onChange={(e) =>
              setSingleProduct({
                ...singleProduct,
                [e.target.name]: e.target.value,
              })
            }
            sx={{ mb: 1 }}
            label="Product Title"
            fullWidth
            value={singleProduct?.title}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            name="category"
            InputLabelProps={{ shrink: true }}
            value={singleProduct?.category}
            onChange={(e) =>
              setSingleProduct({
                ...singleProduct,
                [e.target.name]: e.target.value,
              })
            }
            sx={{ mb: 1 }}
            label="Product Category"
            fullWidth
          />
          <TextField
            name="price"
            InputLabelProps={{ shrink: true }}
            value={singleProduct?.price}
            onChange={(e) =>
              setSingleProduct({
                ...singleProduct,
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
            onChange={(e) =>
              setSingleProduct({
                ...singleProduct,
                [e.target.name]: e.target.files[0],
              })
            }
            sx={{ mb: 1 }}
            type="file"
            label="Product Picture"
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
          <TextField
            name="description"
            InputLabelProps={{ shrink: true }}
            value={singleProduct?.description}
            onChange={(e) =>
              setSingleProduct({
                ...singleProduct,
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
