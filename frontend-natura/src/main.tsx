import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RouterNatura from "./router";
import { NaturaProvider } from "./context/naturaContext";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <NaturaProvider>
        <main className="w-[100%] h-[auto] flex justify-start items-center flex-col bg-graylight">
          <RouterNatura />
        </main>
        <ReactQueryDevtools initialIsOpen={true} />
      </NaturaProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
