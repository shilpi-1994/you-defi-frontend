//@ts-check
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "../template/nav";
import HomePage from "./homePage";
import AppLandingPage from "./landingPage";

const AppLayout = () => {
  return (
    <>
      {/* App routing structure */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLandingPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppLayout;
