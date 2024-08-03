import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RouterNatura from "./router";
import { NaturaProvider } from "./context/naturaContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NaturaProvider>
      <main className="w-[100%] h-[auto] flex justify-start items-center flex-col bg-graylight">
        <RouterNatura />
      </main>
    </NaturaProvider>
  </React.StrictMode>
);
