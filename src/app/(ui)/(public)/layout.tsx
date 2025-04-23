"use client";

import { Outlet } from "react-router-dom"; // Import Outlet

export default function PublicLayout({}: {}) { // Remove children prop type
  return (
    // Add any layout specific to public pages (e.g., centering login form)
    <div>
       {/* Outlet renders the matched child route component (e.g., LoginPage) */}
      <Outlet />
    </div>
  );
}
