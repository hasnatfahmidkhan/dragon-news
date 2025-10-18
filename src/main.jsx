import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routes/router";
import LoadingProvider from "./Provider/LoadingProvider/LoadingProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoadingProvider>
      <RouterProvider router={router} />
    </LoadingProvider>
  </StrictMode>
);
