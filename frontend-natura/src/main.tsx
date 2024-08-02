import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main className="w-[100vw] h-[100vh] flex justify-start items-center flex-col bg-graylight">
      <App />
    </main>
  </React.StrictMode>
);
