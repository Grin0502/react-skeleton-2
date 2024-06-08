import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientLayout from "../../layout/client";
import {
  HomePage,
  Page1
} from "../../page/client";

const ClientView = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<HomePage />} />
          <Route path="Page1" element={<Page1 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default ClientView;
