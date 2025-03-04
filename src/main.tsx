import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router";
import RootRoute from "./routes/RootRoute.tsx";

const root = document.getElementById("root");

createRoot(root!).render(
  <StrictMode>
    <BrowserRouter>
      <RootRoute />
    </BrowserRouter>
  </StrictMode>
);
