import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Teams() {
  const projectTeams = [
    {
      partners: ["Akshatha", "Aditi", "Anusha"],
      topic: "College Event Management",
    },
    {
      partners: ["Ananya", "Meghana", "Tejasvi"],
      topic: "Online Quiz Application",
    },
    { partners: ["Prakruthi", "Prapthi", "Shabhari"], topic: "Food recipe" },
    {
      partners: ["Prasad", "Vinamra", "Vaishak", "Pramarth", "Sujay"],
      topic: "Pet Adoption",
    },
    {
      partners: ["Ashlesh", "Bharath", "Manish"],
      topic: "Electronic Gadget (e-commerce)",
    },
    { partners: ["Anirudh", "Bhavith", "Abhilash"], topic: "Blog Management" },
    { partners: ["Krithi", "Chaithra", "Deepa"], topic: "Task Management" },
    { partners: ["Samrudh"], topic: "Social Media platform" },
    { partners: ["Jishnu"], topic: "E-Store" },
    { partners: ["Tanzeela"], topic: "Fitness Tracker" },
    { partners: ["Sinan"], topic: "Event Management" },
  ];
  return (
    <div>
      <Box>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Project Topics
        </Typography>
      </Box>
      <Box
        sx={{
          pb: 2,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          component={Link}
          to={"/"}
          variant="contained"
          color="primary"
          // sx={{ float: "right" }}
        >
          Home
        </Button>
      </Box>
      <Box>
        <table border={1} cellPadding={10} width={"100%"}>
          <thead>
            <tr>
              <th>Sl</th>
              <th>Interns</th>
              <th>Topic</th>
            </tr>
          </thead>
          <tbody>
            {projectTeams?.map((team, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>
                  {team?.partners?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </td>
                <td>{team?.topic}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </div>
  );
}
