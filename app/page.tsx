import LoginForm from "@/components/LoginForm";
import React from "react";

export default async function page() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl">Login</h1>
      <LoginForm/>
    </main>
  );
}
