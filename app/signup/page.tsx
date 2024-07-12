import SignupForm from "@/components/SignupForm";
import React from "react";

const SignupPage = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl">Sign Up</h1>
      <SignupForm />
    </main>
  );
};

export default SignupPage;
