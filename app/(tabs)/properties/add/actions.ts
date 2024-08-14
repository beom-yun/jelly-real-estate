"use server";

import db from "@/lib/db";
import getSession from "@/lib/session";
import { redirect } from "next/navigation";
import { z } from "zod";

const propertyAddSchema = z.object({
  propertyName: z.string({ required_error: "이름을 입력해주세요." }), // 이름
});

export async function PropertyAddAction(prevState: any, formData: FormData) {
  const data = { propertyName: formData.get("propertyName") || undefined };
  const result = await propertyAddSchema.safeParseAsync(data);
  if (!result.success) return result.error.flatten();

  const session = await getSession();
  const newProperty = await db.property.create({
    data: {
      propertyName: result.data.propertyName,
      user: { connect: { id: session.id } },
    },
    select: { id: true },
  });
  redirect(`/properties/${newProperty.id}/edit`);
}
