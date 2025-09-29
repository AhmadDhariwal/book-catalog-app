import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

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
  } catch (error) {
    console.error("DELETE /api/books/[id] error:", error);

    const payload: Record<string, unknown> = {
      error: "Failed to delete book",
    };

    if (error instanceof Error) {
      payload.message = error.message;
      payload.stack = error.stack;
    }

    return NextResponse.json(payload, { status: 500 });
  }
}
