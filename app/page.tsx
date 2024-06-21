"use client";

import React, { useEffect,useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export default async function page() {
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <div>
      <p>Home Page</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
