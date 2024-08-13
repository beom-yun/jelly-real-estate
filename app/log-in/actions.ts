"use server";

import bcrypt from "bcrypt";
import db from "@/lib/db";
import { z } from "zod";
import getSession from "@/lib/session";
import { redirect } from "next/navigation";

const checkUsernameExists = async (username: string) => {
  const user = await db.user.findUnique({
    where: { username },
    select: { id: true },
  });
  return Boolean(user);
};

const loginFormSchema = z.object({
  username: z
    .string()
    .toLowerCase()
    .refine(checkUsernameExists, "해당 아이디가 없습니다."),
  password: z.string(),
});

export async function loginAction(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    password: formData.get("password"),
  };
  const result = await loginFormSchema.safeParseAsync(data);
  if (!result.success) return result.error.flatten();

  const user = await db.user.findUnique({
    where: { username: result.data.username },
    select: { id: true, password: true },
  });
  const ok = await bcrypt.compare(result.data.password, user!.password ?? "");
  if (ok) {
    const session = await getSession();
    session.id = user!.id;
    await session.save();
    redirect("/properties");
  } else {
    return {
      fieldErrors: { username: [], password: ["틀린 비밀번호입니다."] },
    };
  }
}
