import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import "leaflet/dist/leaflet.css";          
import "@/utils/fixLeafletIcon";            
import "react-day-picker/style.css";        

import App from "./App";
import { ToastProvider } from "@/context/ToastContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <App />
      </ToastProvider>
    </BrowserRouter>
  </StrictMode>
);