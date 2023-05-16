import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";

import { Page } from "./Components/Page/Page";
import { CartPage } from "./Components/Cart/CartPage";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";

export default function App() {
  return (
    <Router>
      <div className="root">
        <Header />
        <Routes>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/" element={<Page />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
