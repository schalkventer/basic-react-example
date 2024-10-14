import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Page } from "./app";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Page />
  </StrictMode>
);
