"use server";

import { createSession, deleteSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { z } from "zod";
import { decrypt } from "./jwt";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const registerSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
});

export const login = async (_prevState: unknown, formData: FormData) => {
  const result = loginSchema.safeParse(Object.fromEntries(formData));
  if (!result.success) return { errors: result.error.flatten().fieldErrors };
  const existingUser = await prisma.user.findUnique({ where: { email: result.data.email } });
  if (!existingUser || existingUser.password !== result.data.password) {
    return { errors: { email: ["Invalid email or password"] } };
  }
  await createSession(existingUser.id);
  redirect("/dashboard/home");
};

export const logout = async (_prevState: unknown, _formData: FormData) => {
  await deleteSession();
  redirect("/auth/login");
};

export const register = async (_prevState: unknown, formData: FormData) => {
  const result = registerSchema.safeParse(Object.fromEntries(formData));
  if (!result.success) return { errors: result.error.flatten().fieldErrors };
  const existingUser = await prisma.user.findUnique({ where: { email: result.data.email } });
  if (existingUser) return { errors: { email: ["Email already in use"] } };
  const newUser = await prisma.user.create({ data: result.data });
  await createSession(newUser.id);
  redirect("/dashboard/home");
};

export const getCurrentUser = async () => {
  const session = (await cookies()).get("session");
  if (!session?.value) return null;
  const payload = await decrypt(session.value);
  const user = await prisma.user.findUnique({
    where: { id: payload?.userId as string },
    select: { id: true, username: true, email: true },
  });
  return user;
};
