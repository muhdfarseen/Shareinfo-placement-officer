import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@mantine/core/styles.css";
import '@mantine/nprogress/styles.css';
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MantineProvider
    theme={{
      fontFamily: "Montserrat, sans-serif",
      headings: { fontFamily: "Montserrat, sans-serif" },
    }}
  >
    <App />
  </MantineProvider>
);
