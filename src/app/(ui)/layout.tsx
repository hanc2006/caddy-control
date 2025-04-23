"use client";

import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { QueryClientProvider } from "@tanstack/react-query";
import { useGetQueryClient } from "@/hooks/query/useGetQueryClient";
import { useEffect } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";

// Keep children prop as Routes are passed implicitly
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = useGetQueryClient();

  useEffect(() => {
    document.title = "Caddy Control";
  }, []);

  // Remove <html>, <head>, and <body> tags
  return (
    // Use a React Fragment or a div if needed for styling/structure
    <>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <main>
            {children}
          </main>
        </TooltipProvider>

        <Toaster />
      </QueryClientProvider>
    </>
  );
}
