import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AppBar, Button, Container, Toolbar } from "@mui/material";
import { toast } from "react-toastify";

export default function AccountMenu({ getUserProfile, user, setUser, state }) {
  const { pathname } = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("authToken") == null) {
      setUser(null);
    } else {
      let token = localStorage.getItem("authToken");
      getUserProfile(token);
    }
  }, [state]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Prevent rendering on login/register pages
  if (pathname === "/login" || pathname === "/register") {
    return null;
  }

  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "white", color: "black", boxShadow: 2 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", mr: 4 }}>
            <ShoppingBagIcon
              sx={{ color: "success.main", mr: 1, fontSize: 32 }}
            />
            <Typography
              variant="h5"
              component={Link}
              to="/"
              sx={{
                fontWeight: "bold",
                color: "success.main",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              E-Bazar
            </Typography>
          </Box>

          {/* Navigation Links */}
          <Box sx={{ flexGrow: 1, display: "flex", gap: 3 }}>
            <Typography
              component={Link}
              to="/"
              sx={{
                color: "text.primary",
                textDecoration: "none",
                fontWeight: 700,
                transition: "0.3s ease-in-out",
                "&:hover": { color: "success.main" },
              }}
            >
              Home
            </Typography>
            <Typography
              component={Link}
              to="/about"
              sx={{
                color: "text.primary",
                textDecoration: "none",
                fontWeight: 700,
                transition: "0.3s ease-in-out",
                "&:hover": { color: "success.main" },
              }}
            >
              About
            </Typography>
            <Typography
              component={Link}
              to="/products"
              sx={{
                color: "text.primary",
                textDecoration: "none",
                fontWeight: 700,
                transition: "0.3s ease-in-out",
                "&:hover": { color: "success.main" },
              }}
            >
              Products
            </Typography>
          </Box>

          {/* User Account Section */}
          {user ? (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ mr: 2 }}>Hi, {user?.username}</Typography>
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Avatar
                    src={`http://localhost:7000/uploads/product/${user?.profile}`}
                    sx={{
                      width: 32,
                      height: 32,
                      border: "1px solid black",
                      boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.47)",
                    }}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                  paper: {
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&::before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem
                  component={Link}
                  to="/user-products"
                  onClick={handleClose}
                >
                  <Avatar /> My Products
                </MenuItem>
                <MenuItem component={Link} to="/profile" onClick={handleClose}>
                  <Avatar /> Profile
                </MenuItem>
                <Divider />
                <MenuItem
                  onClick={() => {
                    localStorage.removeItem("authToken");
                    setUser(null);
                    handleClose();
                    // navigate("/login");
                    toast.error("Logged Out");
                  }}
                >
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Button
              variant="contained"
              color="success"
              component={Link}
              to="/login"
              sx={{ ml: 2 }}
            >
              Sign In
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
