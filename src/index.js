import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthUser } from "./context/AuthUser";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthUser>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </AuthUser>
  </React.StrictMode>
);
