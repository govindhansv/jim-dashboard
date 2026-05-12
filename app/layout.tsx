import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Sidebar } from "@/components/Sidebar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jim Dashboard",
  description: "A modern operational dashboard for projects, analytics, and settings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-950 text-slate-100">
        <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.20),transparent_34rem),radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_30rem),linear-gradient(135deg,#020617_0%,#0f172a_54%,#111827_100%)]">
          <Sidebar />
          <main className="min-h-screen px-4 pb-28 pt-5 sm:px-6 lg:ml-72 lg:px-8 lg:py-8">
            <div className="mx-auto w-full max-w-7xl">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
