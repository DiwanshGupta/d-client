import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Login from "./pages/login";
import Register from "./pages/register";
import Contact from "./pages/contact";
import Service from "./pages/service";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Notfound from "./pages/not-found";
import { Logout } from "./pages/logout";
import Admin from "./components/layout/admin-layout";
import Adminuser from "./pages/admin-users";
import AdminContact from "./pages/admin-contact";
import Update from "./pages/admin-udate";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/service" element={<Service />} />
          <Route path="*" element={<Notfound />} />{" "}
          <Route path="/logout" element={<Logout />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="user" element={<Adminuser />} />
            <Route path="contact" element={<AdminContact />} />
            <Route path="user/:id/edit" element={<Update />} />
          </Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
