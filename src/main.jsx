import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./index.css";
import { ActiveSectionProvider } from "./contexts/ActiveSectionContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ActiveSectionProvider>
      <App />
    </ActiveSectionProvider>
  </StrictMode>,
);
