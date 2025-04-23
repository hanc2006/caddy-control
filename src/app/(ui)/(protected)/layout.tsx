"use client";

import TopHeader from "@/components/top-header";
import { useAuthStore } from "@/store/authStore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function ProtectedLayout({}: {}) {
  const { accessToken } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate('/login', { replace: true });
    }
  }, [accessToken, navigate]);

  if (!accessToken) return null;

  return (
    <div className="h-screen flex flex-col px-48 overflow-hidden">
      <TopHeader />
      <div className="flex-1 px-4 pb-10 max-h-[86vh]">
        <Outlet />
      </div>
    </div>
  );
}
