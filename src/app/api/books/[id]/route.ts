// src/app/api/books/[id]/route.ts
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params; // ✅ await because it's a Promise

    if (!id) {
      return NextResponse.json(
        { error: "Book ID is required" },
        { status: 400 }
      );
    }

    await prisma.book.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Book deleted successfully" },
      { status: 200 }
    );
  } catch (error: unknown) {
  console.error("DELETE /api/books/[id] error:", error);

  const message =
    error instanceof Error ? error.message : "Unexpected error occurred";

  return NextResponse.json(
    { error: "Failed to delete book", message },
    { status: 500 }
  );
}
}
