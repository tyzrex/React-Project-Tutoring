import AuthLayout from "@/layouts/auth-layout";
import LoginPage from "@/pages/auth/login-page";
import RegisterPage from "@/pages/auth/register-page";
import { Route, Routes } from "react-router";

export default function AppRouter() {
  return (
    <Routes>
      <Route index element={<div>Home</div>} />

      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>

      <Route element={<div>Dashboard</div>}>
        <Route path="profile" element={<div>Profile</div>} />
        <Route path="settings" element={<div>Settings</div>} />
      </Route>
    </Routes>
  );
}
