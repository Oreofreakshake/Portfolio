import type { Metadata } from "next";
import { Jost, DM_Sans } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Footer from "./_components/Footer";

const heading = Jost({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const sans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Yoosuf Yazak",
  description: "Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${heading.variable} font-sans`}>
        <main className="min-h-screen w-full bg-gradient-to-b from-slate-900 to-slate-800 flex justify-center items-center">
          <div className="flex flex-col gap-4 max-w-xs w-full bg-white rounded-lg z-0">
            <div className="flex flex-col justify-center items-center gap-8 p-6">
              <div className="relative h-32 w-32 rounded-full overflow-hidden">
                <Image src="/picture.jpg" alt="Zucc" fill={true} />
              </div>
              <div className="text-center">
                <h1 className="font-heading text-xl text-gray-900 font-semibold leading-8">
                  Yoosuf Yazak
                </h1>
                <h2 className="text-gray-400 text-sm font-semibold">
                  Software Engineer
                </h2>
              </div>
            </div>
            <div className="px-6">{children}</div>
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
