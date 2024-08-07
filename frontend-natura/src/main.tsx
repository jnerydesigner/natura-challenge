import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RouterNatura from "./router";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NaturaProvider } from "./context/naturaContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <NaturaProvider>
        <main className="w-[100%] h-full flex justify-start items-center flex-col bg-gray-200">
          <RouterNatura />
        </main>
      </NaturaProvider>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
