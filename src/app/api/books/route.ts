import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

const isDev = process.env.NODE_ENV === "development";

// ✅ Define book body type
interface BookBody {
  title: string;
  author: string;
  genre: string;
  userEmail?: string;
}

export async function GET() {
  try {
    const books = await prisma.book.findMany({
      orderBy: { createdAt: "desc" },
      include: { user: true }, // 👈 include user info
    });
    return NextResponse.json(books, { status: 200 });
  } catch (error) {
    console.error("GET /api/books error:", error);
    const payload: Record<string, unknown> = { error: "Failed to fetch books" };
    if (isDev && error instanceof Error) {
      payload.message = error.message;
      payload.stack = error.stack;
    }
    return NextResponse.json(payload, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body: BookBody = await req.json();
    const { title, author, genre, userEmail } = body;

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
  } catch (error) {
    console.error("POST /api/books error:", error);
    const payload: Record<string, unknown> = { error: "Failed to create book" };
    if (isDev && error instanceof Error) {
      payload.message = error.message;
      payload.stack = error.stack;
    }
    return NextResponse.json(payload, { status: 500 });
  }
}
