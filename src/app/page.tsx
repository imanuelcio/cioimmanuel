"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Beranda from "./home/page";

export default function Home() {
  const queryclient = new QueryClient();

  return (
    <QueryClientProvider client={queryclient}>
      <Beranda />;
    </QueryClientProvider>
  );
}
