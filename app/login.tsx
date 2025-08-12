import { useRouter } from "expo-router";
import React, { useState } from "react";
import LoginScreen from "../screens/LoginScreen";

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    // Simula login y navega a tabs
    setTimeout(() => {
      setLoading(false);
      router.replace("/(tabs)");
    }, 800);
  };

  return <LoginScreen onLogin={handleLogin} />;
}
