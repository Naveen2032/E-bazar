import React from "react";
import { Box, Typography, Modal, CircularProgress } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "white",
  // backdropFilter: "blur(10px)",
  borderRadius: "12px",
  // boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  animation: "fadeIn 0.3s ease-in-out",
};

export default function Loader({
  loading,
  message = "Loading...",
  setLoading,
}) {
  return (
    <Modal
      open={loading}
      // onClose={() => setLoading(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <CircularProgress size={50} sx={{ color: "#1976D2", mb: 2 }} />
        <Typography
          id="modal-modal-title"
          variant="h6"
          // sx={{ fontWeight: 600, fontFamily: "Poppins" }}
        >
          {message}
        </Typography>
      </Box>
    </Modal>
  );
}
