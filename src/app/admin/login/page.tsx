"use client";

import { login } from "@/lib/auth";
import { useActionState } from "react";

const AdminLoginPage: React.FC = () => {
  const [state, action, pending] = useActionState(login, null);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="w-[300px] border p-2">
        <h1 className="text-2xl font-bold">Login</h1>
        <form action={action} className="space-y-2">
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john@mail.com"
              className="border p-2"
            />
            {state?.errors.email && <p className="text-red-500">{state.errors.email}</p>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="********"
              className="border p-2"
            />
          </div>
          {state?.errors.password && <p className="text-red-500">{state.errors.password}</p>}
          <button
            type="submit"
            disabled={pending}
            className="w-full border p-2 disabled:bg-gray-100"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
