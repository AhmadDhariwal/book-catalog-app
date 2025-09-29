import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

const isDev = process.env.NODE_ENV === "development";

export async function GET() {
  try {
    const books = await prisma.book.findMany({
      orderBy: { createdAt: "desc" },
      include: { user: true }, // 👈 include user info
    });
    return NextResponse.json(books, { status: 200 });
  } catch (error: any) {
    console.error("GET /api/books error:", error);
    const payload: any = { error: "Failed to fetch books" };
    if (isDev) {
      payload.message = error?.message ?? String(error);
      payload.stack = error?.stack ?? undefined;
    }
    return NextResponse.json(payload, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, author, genre, userEmail } = body ?? {};

    if (!title || !author || !genre) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // 🔗 Find the user by email (sent from AddBookPage)
    let user = null;
    if (userEmail) {
      user = await prisma.user.findUnique({ where: { email: userEmail } });
    }

    const newBook = await prisma.book.create({
      data: {
        title,
        author,
        genre,
        userId: user ? user.id : null, // 👈 link to user if exists
      },
    });

    return NextResponse.json(newBook, { status: 201 });
  } catch (error: any) {
    console.error("POST /api/books error:", error);
    const payload: any = { error: "Failed to create book" };
    if (isDev) {
      payload.message = error?.message ?? String(error);
      payload.stack = error?.stack ?? undefined;
    }
    return NextResponse.json(payload, { status: 500 });
  }
}
