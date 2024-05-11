import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Header from "./header";
import Survey from "./survey";
import Prof from "./prof";
import Chat from "./chat";
import Footer from "./footer";

import "./App.css";
import Done from "./done";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/prof" element={<Prof />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/done" element={<Done />} />
        </Routes>
      </BrowserRouter>
    </main>
    <Footer />
  </React.StrictMode>
);
