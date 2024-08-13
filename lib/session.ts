import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

interface ISessionContent {
  id?: number;
}

export default function getSession() {
  return getIronSession<ISessionContent>(cookies(), {
    cookieName: "jelly-rs",
    password: process.env.COOKIE_PASSWORD!,
  });
}
