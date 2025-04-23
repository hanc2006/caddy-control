"use client";

import { Card } from '@/components/ui/card'
import { LoginForm } from './components/login-form'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from '@/store/authStore';
import { useLogin } from "@/hooks/user/user.hooks";

export default function LoginPage() {
  const { accessToken } = useAuthStore();
  const navigate = useNavigate();
  const loginMutation = useLogin();

  useEffect(() => {
    if (accessToken) {
      navigate('/');
    }
  }, [accessToken, navigate]);

  return (
    <Card className='p-6'>
      <div className='mb-2 flex flex-col space-y-2 text-left'>
        <h1 className='text-lg font-semibold tracking-tight'>
          Login
        </h1>
        <p className='text-sm text-muted-foreground'>
          Enter your username and password to get started. <br />
        </p>
      </div>
      <LoginForm />
    </Card>
  );
}
