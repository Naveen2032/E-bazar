import {
  Avatar,
  Box,
  Button,
  Grid2,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import PageBanner from "../Components/PageBanner";

export default function Profile({
  formInfo,
  setFormInfo,
  updateProfile,
  user,
  setLoading,
}) {
  // console.log(user);
  const [formError, setFormError] = useState({ cPassword: null, phone: null });
  const [editable, setEditable] = useState(false);
  const handleProfileUpdate = () => {
    if (formInfo.nPassword != "") {
      if (formInfo.nPassword != formInfo.cPassword) {
        return setFormError({
          ...formError,
          cPassword: "Passwords do not match!",
        });
      }
    }
    if (formInfo?.phone == "" || formInfo?.phone == undefined) {
      return setFormError({
        ...formError,
        phone: "Please enter a phone number",
      });
    }
    // console.log(formInfo);
    const data = new FormData();
    data.append("username", formInfo.username);
    data.append("phone", formInfo.phone);
    data.append("email", formInfo.email);
    if (formInfo.nPassword != "") {
      data.append("password", formInfo.cPassword);
    }
    if (formInfo?.profile) {
      data.append("profile", formInfo.profile);
    }
    setLoading(true);
    updateProfile(data);
    setEditable(false);
  };
  return (
    <div>
      <PageBanner
        title="Profile"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Profile", path: "/profile" },
        ]}
      />
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Grid2 container>
          {/* <Grid2 size={{ xs: 12, ms: 12 }}>
            <Box
              sx={{
                p: 4,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: 2,
                borderRadius: "20px",
                backgroundImage:
                  "linear-gradient(0deg, #dde038, #67d7367d 206px)",
              }}
            >
              <Box sx={{ position: "relative", top: 100 }}>
                <Avatar
                  src={`http://localhost:7000/uploads/product/${user?.profile}`}
                  sx={{ width: 100, height: 100 }}
                />
                <Typography variant="h4" sx={{ fontFamily: "fantasy" }}>
                  {user?.username}
                </Typography>
              </Box>
            </Box>
          </Grid2> */}
          <Grid2 sx={{ mt: 5 }} size={{ xs: 12, ms: 12 }}>
            <Paper sx={{ p: 4 }} elevation={5}>
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  p: 2,
                  position: "relative",
                  top: -100,
                }}
              >
                <Avatar
                  src={`http://localhost:7000/uploads/product/${user?.profile}`}
                  sx={{
                    width: 150,
                    height: 150,
                    border: "1px solid black",
                    boxShadow: "5px 5px 15px #000000a6",
                  }}
                />
                <Typography variant="h4" sx={{ fontFamily: "fantasy" }}>
                  {user?.username}
                </Typography>
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Box>
                  <Typography variant="overline">Update Profile</Typography>
                </Box>
                <Grid2 spacing={2} container>
                  <Grid2 size={{ xs: 12, sm: 6 }}>
                    <TextField
                      disabled={editable ? false : true}
                      value={formInfo?.username}
                      onChange={(e) =>
                        setFormInfo({
                          ...formInfo,
                          [e.target.name]: e.target.value,
                        })
                      }
                      fullWidth
                      label="username"
                      name="username"
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 12, sm: 6 }}>
                    <TextField
                      disabled={editable ? false : true}
                      value={formInfo?.email}
                      onChange={(e) =>
                        setFormInfo({
                          ...formInfo,
                          [e.target.name]: e.target.value,
                        })
                      }
                      fullWidth
                      label="Email Address"
                      name="email"
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 12, sm: 6 }}>
                    <TextField
                      disabled={editable ? false : true}
                      value={formInfo?.phone}
                      onChange={(e) => {
                        setFormInfo({
                          ...formInfo,
                          [e.target.name]: e.target.value,
                        });
                        setFormError({
                          ...formError,
                          [e.target.name]: null,
                        });
                      }}
                      fullWidth
                      label="Contact Number"
                      name="phone"
                      type="number"
                      helperText={formError?.phone && formError?.phone}
                      error={!!formError?.phone}
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 12, sm: 6 }}>
                    <TextField
                      onChange={(e) =>
                        setFormInfo({
                          ...formInfo,
                          [e.target.name]: e.target.files[0],
                        })
                      }
                      disabled={editable ? false : true}
                      fullWidth
                      label="Upload Picture"
                      name="profile"
                      type="file"
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 12, sm: 6 }}>
                    <TextField
                      disabled={editable ? false : true}
                      value={formInfo?.nPassword}
                      onChange={(e) =>
                        setFormInfo({
                          ...formInfo,
                          [e.target.name]: e.target.value,
                        })
                      }
                      fullWidth
                      label="New Password"
                      name="nPassword"
                      type="text"
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 12, sm: 6 }}>
                    <TextField
                      value={formInfo?.cPassword}
                      onChange={(e) => {
                        setFormInfo({
                          ...formInfo,
                          [e.target.name]: e.target.value,
                        });
                        setFormError({ ...formError, cPassword: null });
                      }}
                      fullWidth
                      label="Confirm Password"
                      name="cPassword"
                      type="password"
                      helperText={formError?.cPassword && formError?.cPassword}
                      error={!!formError?.cPassword}
                      disabled={formInfo?.nPassword == "" ? true : false} //optional
                    />
                  </Grid2>
                  <Grid2
                    sx={{ display: "flex", justifyContent: "flex-end", py: 2 }}
                    size={{ xs: 12, sm: 12 }}
                  >
                    {editable ? (
                      <Box sx={{ display: "flex", gap: 2 }}>
                        <Button
                          variant="outlined"
                          color="error"
                          onClick={() => setEditable(false)}
                        >
                          Cancel
                        </Button>
                        <Button
                          onClick={handleProfileUpdate}
                          variant="contained"
                        >
                          Submit
                        </Button>
                      </Box>
                    ) : (
                      <Box>
                        <Button
                          onClick={() => setEditable(true)}
                          variant="contained"
                          color="warning"
                        >
                          Edit Profile
                        </Button>
                      </Box>
                    )}
                  </Grid2>
                </Grid2>
              </Box>
            </Paper>
          </Grid2>
        </Grid2>
      </Box>
    </div>
  );
}
