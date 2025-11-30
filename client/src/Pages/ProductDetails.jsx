import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import PageBanner from "../Components/PageBanner";

export default function ProductDetails({ user }) {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [showContact, setShowContact] = useState(false);
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    let auth = localStorage.getItem("authToken") || "";
    axios
      .get(`http://localhost:7000/user/view-single-product/${id}`, {
        headers: { "auth-token": auth },
      })
      .then((res) => {
        if (res.data.success) {
          setProductDetails(res.data.product);
          setSimilarProducts(res.data.otherProducts);
          setShowContact(false);
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <Box>
      <PageBanner
        title="Products"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Products", path: "/products" },
        ]}
      />
      <Box sx={{ flexGrow: 1, p: { xs: 2, md: 5 } }}>
        {productDetails && (
          <Paper
            elevation={6}
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              p: { xs: 2, md: 4 },
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#fff",
            }}
          >
            <Grid container spacing={4} alignItems="center">
              {/* Product Image */}
              <Grid item xs={12} md={5}>
                <Box
                  sx={{
                    overflow: "hidden",
                    borderRadius: 3,
                    // boxShadow: 5,
                    transition: "0.3s",
                    "&:hover": { transform: "scale(1.02)" },
                  }}
                >
                  <img
                    src={`http://localhost:7000/uploads/product/${productDetails?.picture}`}
                    alt="Product"
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "12px",
                    }}
                  />
                </Box>
              </Grid>

              {/* Product Details */}
              <Grid item xs={12} md={7}>
                <Typography variant="h3" fontWeight="bold" gutterBottom>
                  {productDetails?.title}
                </Typography>
                <Typography
                  variant="h4"
                  color="primary"
                  fontWeight="bold"
                  gutterBottom
                >
                  ₹{productDetails?.price}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  {productDetails?.description}
                </Typography>

                <Divider sx={{ my: 2 }} />

                {/* Seller Info */}
                <Card
                  elevation={3}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    p: 2,
                    borderRadius: 3,
                    boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.1)",
                    justifyContent: "space-between",
                    transition: "0.3s",
                    "&:hover": {
                      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar
                      src={`http://localhost:7000/uploads/product/${productDetails?.sellerId?.profile}`}
                      sx={{ width: 80, height: 80 }}
                    />
                    <Box>
                      <Typography variant="h5" fontWeight="bold">
                        {productDetails?.sellerId?.username}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Posted {moment(productDetails?.createdAt).fromNow()}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ textAlign: "center" }}>
                    {showContact ? (
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        color="primary"
                        sx={{
                          p: 2,
                          borderRadius: 3,
                          // bgcolor: "#E3F2FD",
                          display: "inline-block",
                          // boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
                          animation: "fadeIn 0.5s ease-in-out",
                          "@keyframes fadeIn": {
                            from: { opacity: 0, transform: "scale(0.9)" },
                            to: { opacity: 1, transform: "scale(1)" },
                          },
                        }}
                      >
                        📞 {productDetails?.sellerId?.phone}
                      </Typography>
                    ) : (
                      <Button
                        onClick={() => setShowContact(true)}
                        variant="contained"
                        size="large"
                        sx={{
                          borderRadius: 3,
                          px: 4,
                          py: 1.5,
                          fontSize: "1rem",
                          textTransform: "none",
                          background:
                            "linear-gradient(135deg, #1E88E5, #1976D2)",
                          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
                          transition: "0.3s ease",
                          "&:hover": {
                            background:
                              "linear-gradient(135deg, #1565C0, #0D47A1)",
                            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
                            transform: "scale(1.05)",
                          },
                        }}
                      >
                        💬 Contact Seller
                      </Button>
                    )}
                  </Box>
                </Card>

                {/* Call to Action */}
              </Grid>
            </Grid>
          </Paper>
        )}

        {/* Similar Products Section */}
        {similarProducts?.length > 0 && (
          <Box sx={{ mt: 5 }}>
            <Divider sx={{ mb: 3 }}>
              <Typography variant="h4" fontWeight="bold">
                Similar Products
              </Typography>
            </Divider>

            <Grid container spacing={4}>
              {similarProducts.map((product, index) => (
                <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                  <ProductCard user={user} product={product} />
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Box>
    </Box>
  );
}
