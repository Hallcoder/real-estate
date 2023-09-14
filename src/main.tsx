import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import About from "./pages/about.tsx";
import Buy from "./pages/buy.tsx";
import App from "./App";
import Rent from "./pages/Rent.tsx";
import Header from "./components/Header.tsx";
import InfoHeader from "./components/infoHeader.tsx";
import PropertyPage from "./pages/propertyPage.tsx";
import ContactPage from "./pages/Contact.tsx";
import React from "react";
import BlockSelection from "./pages/BlockSelection.tsx";
import ApartmentSelection from "./pages/ApartmentSelection.tsx";
import ApartmentPage from "./pages/ApartmentPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    <InfoHeader />
    <Header />
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/buy" element={<Buy />} />
      <Route path="/blockSelection/:id" element={<BlockSelection />} />
      <Route path="/rent" element={<Rent />} />
      <Route path="/apartment/:blockNumber/:apartmentNumber" element={<ApartmentPage />} />
      <Route path="/" element={<App />} />
      <Route
        path="/apartmentSelection/:id/:blockNumber"
        element={<ApartmentSelection />}
      />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/:id" element={<PropertyPage />} />
    </Routes>
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
