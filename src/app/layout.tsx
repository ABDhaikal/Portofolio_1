import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
});

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
   variable: "--font-space-grotesk",
   subsets: ["latin"],
});




export const metadata: Metadata = {
   title: "Haikal's Portfolio | Web Developer & Designer",
   description:
      "Discover Haikal's world of web development and design. Explore innovative projects, eye-catching visuals, and meticulously crafted code. Specializing in Next.js, Tailwind CSS, TypeScript, and coffee-themed designs with a pop art flair.",
   openGraph: {
      images: "/Navbaricon/SmileLogo.png",
   },
};



export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body
            className={`${geistSans.variable} antialiased`}
         >
            {children}
         </body>
      </html>
   );
}
