import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;

  const user = await prisma.user.create({
    data: {
      email,
      password,
    },
  });

  return NextResponse.json(user);
}
