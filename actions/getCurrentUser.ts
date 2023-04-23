import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();
    console.log(session);
  } catch (error: any) {
    return null;
  }
}
