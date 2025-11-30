import { Box } from "@mui/material";
import React from "react";
import AboutContent from "../Components/AboutContent";
import PageBanner from "../Components/PageBanner";

export default function About({ user }) {
  return (
    <div>
      <PageBanner
        title="About"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "About", path: "/about" },
        ]}
      />
      <Box>
        <AboutContent user={user} />
      </Box>
    </div>
  );
}
