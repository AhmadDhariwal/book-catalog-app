import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";

export const metadata = {
  title: "Book Catalog",
  description: "Track and manage your personal library",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-full w-full bg-gray-50 text-gray-900">
        {/* ✅ Wrap entire app with SessionProvider */}
        <Providers>
          <Navbar />
          <main className="min-h-screen w-full">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
