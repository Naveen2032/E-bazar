import { Breadcrumbs, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function PageBanner({ title, breadcrumbs }) {
  return (
    <Box
      sx={{
        width: "100%",
        py: 4,
        px: 3,
        background: "linear-gradient(to right,#4caf50 30%, #2e7d32 90%)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Page Title */}
      <Typography variant="h4" fontWeight="bold">
        {title}
      </Typography>

      {/* Breadcrumbs */}
      <Breadcrumbs sx={{ mt: 1 }} separator="›" aria-label="breadcrumb">
        {breadcrumbs.map((item, index) =>
          index === breadcrumbs.length - 1 ? (
            <Typography key={index} color="inherit">
              {item.label}
            </Typography>
          ) : (
            <Link
              key={index}
              to={item.path}
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              {item.label}
            </Link>
          )
        )}
      </Breadcrumbs>
    </Box>
  );
}
