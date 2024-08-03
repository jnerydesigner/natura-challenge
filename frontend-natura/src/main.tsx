import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RouterNatura from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main className="w-[100vw] h-[auto] flex justify-start items-center flex-col bg-graylight">
      <RouterNatura />
    </main>
  </React.StrictMode>
);
