import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import MainLayout from "../MainLayout/MainLayout";
import ChTwoForm from "../pages/ChTwoForm/ChTwoForm";
import Login from "../pages/Login/Login";
import FormList from "../pages/FormList/FormList";
import ChFourForm from "../pages/ChFourForm/ChFourForm";

export default function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Login />} />
            <Route path="forms" element={<FormList />} />
            <Route path="ch-2-form" element={<ChTwoForm />} />
            <Route path="ch-4-form" element={<ChFourForm />} />
          </Route>

          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
