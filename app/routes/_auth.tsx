import { Outlet } from "@remix-run/react";

export default function AuthLayout() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex items-center justify-center p-4">
      <Outlet />
    </main>
  );
}
