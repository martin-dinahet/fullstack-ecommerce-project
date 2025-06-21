"use client";

import { login } from "@/lib/auth";
import { useActionState } from "react";

const LoginPage: React.FC = () => {
  const [state, action, pending] = useActionState(login, undefined);

  return (
    <div className="flex min-h-screen w-screen items-center justify-center">
      <form action={action} className="w-[300px] space-y-2 border p-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="john@mail.com"
            className="border p-1"
          />
          {state?.errors.email && <p className="text-red-500">{state.errors.email}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="********"
            className="border p-1"
          />
          {state?.errors.password && <p className="text-red-500">{state.errors.password}</p>}
        </div>
        <button type="submit" disabled={pending} className="w-full border p-2 disabled:bg-gray-100">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
