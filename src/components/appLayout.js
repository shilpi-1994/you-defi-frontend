//@ts-check
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoanTokenForm from "../forms/loanTokenForm";
import HomePage from "./homePage";
import InfluencerPage from "./influencerPage";
import AppLandingPage from "./landingPage";

const AppLayout = () => {
  return (
    <>
      {/* App routing structure */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/loanToken" element={<LoanTokenForm />} />
          <Route path="/influencers" element={<InfluencerPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppLayout;
