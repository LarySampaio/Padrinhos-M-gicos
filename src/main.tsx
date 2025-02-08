import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyle } from "./globalStyled.ts";
import App from "./App.tsx";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);
