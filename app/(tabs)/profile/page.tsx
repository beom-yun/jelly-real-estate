import db from "@/lib/db";
import getSession from "@/lib/session";
import { redirect } from "next/navigation";

const logout = async () => {
  "use server";
  const session = await getSession();
  session.destroy();
  redirect("/");
};

export default async function ProfilePage() {
  const session = await getSession();
  const user = await db.user.findUnique({
    where: { id: session.id },
    select: { username: true },
  });
  return (
    <div className="flex flex-col p-5">
      <span className="pb-5 text-4xl font-extrabold">
        안녕하세요 {user?.username}!
      </span>
      <form action={logout}>
        <button className="btn btn-accent w-full">로그아웃</button>
      </form>
    </div>
  );
}
