// test-prisma.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

(async () => {
  try {
    console.log("Testing Prisma DB connection...");
    const books = await prisma.book.findMany();
    console.log("Books found:", books.length);
    console.log(books);
  } catch (err) {
    console.error("Prisma test error:", err);
  } finally {
    await prisma.$disconnect();
  }
})();
