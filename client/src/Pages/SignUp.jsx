import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import bg from "../Assets/auth.webp";

export default function SignUp() {
  let navigate = useNavigate();
  const [formInfo, setFormInfo] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:7000/user/register", formInfo)
      .then((res) => {
        if (res.data.success) {
          navigate("/login");
          toast.success(res.data.message);
        } else {
          toast.warning(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #E3F2FD, #BBDEFB)",
      }}
    >
      <Paper
        sx={{
          width: "900px",
          display: "flex",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
        }}
        elevation={5}
      >
        {/* Left Side - Vector Image */}

        {/* Right Side - Form */}
        <Box sx={{ width: "55%", p: 4, textAlign: "center" }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "700", fontFamily: "Poppins", color: "#1565C0" }}
          >
            Sign Up
          </Typography>
          <Box component={"form"} onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              placeholder="Enter username"
              label="Username"
              fullWidth
              name="username"
              onChange={(e) =>
                setFormInfo({ ...formInfo, [e.target.name]: e.target.value })
              }
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": { borderRadius: "8px" },
              }}
              required
            />
            <TextField
              placeholder="Enter email address"
              label="Email ID"
              fullWidth
              type="email"
              name="email"
              onChange={(e) =>
                setFormInfo({ ...formInfo, [e.target.name]: e.target.value })
              }
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": { borderRadius: "8px" },
              }}
              required
            />
            <TextField
              placeholder="Enter password"
              label="Password"
              fullWidth
              type="password"
              name="password"
              onChange={(e) =>
                setFormInfo({ ...formInfo, [e.target.name]: e.target.value })
              }
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": { borderRadius: "8px" },
              }}
              required
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                p: 1.5,
                fontSize: "1rem",
                borderRadius: "8px",
                fontWeight: "bold",
                textTransform: "none",
                background: "linear-gradient(135deg, #1E88E5, #1565C0)",
                transition: "0.3s ease",
                "&:hover": {
                  background: "linear-gradient(135deg, #1565C0, #0D47A1)",
                  // transform: "scale(1.05)",
                },
              }}
            >
              Sign Up
            </Button>
            <Typography sx={{ mt: 2, fontSize: "0.9rem", color: "#555" }}>
              Already have an account?{" "}
              <Link
                to={"/login"}
                style={{
                  color: "#1E88E5",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Log in here
              </Link>
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "45%",
            backgroundColor: "#1976D2",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
          }}
        >
          <img
            src={bg}
            // src="https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png" // Use your vector here
            alt="Sign Up"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Paper>
    </Box>
  );
}
