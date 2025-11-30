import logo from "./logo.svg";
import "./App.css";
import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import InsertForm from "./Pages/InsertForm";
import UpdateForm from "./Pages/UpdateForm";
import Teams from "./Pages/Teams";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import AccountMenu from "./Components/Account";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import About from "./Pages/About";
import Products from "./Pages/Products";
import MyProducts from "./Pages/MyProducts";
import ProductDetails from "./Pages/ProductDetails";
import Profile from "./Pages/Profile";
import { ToastContainer, toast } from "react-toastify";
import Loader from "./Components/Loader";
import Footer from "./Components/Footer";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formInfo, setFormInfo] = useState({
    username: "",
    email: "",
    phone: "",
    profile: null,
    nPassword: "",
    cPassword: "",
  });
  const [state, setState] = useState(true);
  useEffect(() => {
    setFormInfo({
      ...formInfo,
      username: user?.username,
      email: user?.email,
      phone: user?.phone,
    });
  }, [user]);
  // console.log(formInfo);
  const getUserProfile = (auth) => {
    // console.log(auth);
    axios
      .get("http://localhost:7000/user/get-user-profile", {
        headers: { "auth-token": auth },
      })
      .then((res) => {
        setUser(res.data.userProfile);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateProfile = (data) => {
    let auth = localStorage.getItem("authToken") || "";
    axios
      .put(`http://localhost:7000/user/update-profile`, data, {
        headers: { "auth-token": auth },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          setUser(res.data.profile);
          setTimeout(() => {
            setLoading(false);
            toast.success("profile updated successfully");
          }, 4000);
          // toast.success(res.data.message);
        } else {
          toast.warning(res.data.message);
        }
        // alert(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Box>
        <BrowserRouter>
          <Box>
            <AccountMenu
              state={state}
              user={user}
              setUser={setUser}
              getUserProfile={getUserProfile}
            />
          </Box>
          <Box sx={{ minHeight: "100vh" }}>
            <Routes>
              <Route path="/" element={<Home user={user} />} />
              <Route path="/about" element={<About user={user} />} />
              <Route
                path="/products"
                element={<Products setLoading={setLoading} user={user} />}
              />
              <Route
                path="/view-product/:id"
                element={<ProductDetails user={user} />}
              />
              <Route
                path="/user-products"
                element={<MyProducts user={user} />}
              />
              <Route
                path="/insert"
                element={<InsertForm setLoading={setLoading} />}
              />
              <Route
                path="/edit/:id"
                element={<UpdateForm setLoading={setLoading} />}
              />
              <Route
                path="/profile"
                element={
                  <Profile
                    setLoading={setLoading}
                    user={user}
                    updateProfile={updateProfile}
                    formInfo={formInfo}
                    setFormInfo={setFormInfo}
                  />
                }
              />
              <Route path="/teams" element={<Teams />} />
              <Route
                path="/login"
                element={
                  <SignIn
                    state={state}
                    setState={setState}
                    setLoading={setLoading}
                  />
                }
              />
              <Route path="/register" element={<SignUp />} />
            </Routes>
          </Box>
          <Box>
            <Footer />
          </Box>
        </BrowserRouter>
        <ToastContainer />
        <Loader setLoading={setLoading} loading={loading} />
      </Box>
    </div>
  );
}

export default App;
