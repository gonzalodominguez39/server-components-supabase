import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Link from "next/link";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} bg-black antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
  <main className="min-h-screen ex flex-col ">
      <div className="flex-1 w-full flex flex-col gap-20 ">
        <nav className="w-full flex bg-black justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full flex justify-between items-center p-3 px-5 text-sm">
            <div className="flex gap-5 items-center font-semibold">
              <Link className="text-white " href={"/"}>Primer CRUD a supabase</Link>
            </div>
          </div>
        </nav>
        <div className="flex-1 flex flex-col gap-20 p-5">
          {children}
        </div>
      </div>
    </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
