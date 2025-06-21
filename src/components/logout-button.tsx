"use client";

import { logout } from "@/lib/auth";
import { useActionState } from "react";

export const LogoutButton = () => {
  const [_, action, pending] = useActionState(logout, undefined);

  return (
    <form action={action}>
      <button type="submit" disabled={pending} className="border p-2 disabled:bg-gray-100">
        Log Out
      </button>
    </form>
  );
};
