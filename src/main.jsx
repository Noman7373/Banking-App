import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AppStateContext } from "./components/Context/Contextprovider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppStateContext>
      <App />
    </AppStateContext>
  </StrictMode>
);
