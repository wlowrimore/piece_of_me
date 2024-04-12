import type { Metadata } from "next";
import { Montserrat as Inter } from "next/font/google";
import "./globals.css";
import NavMain from "./components/NavMain/NavMain";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "William Lowrimore | Frontend Developer",
  description:
    "William Lowrimore is a frontend developer from Nashville, TN.  A former instructor, performer, and composer of music, he moved to Nashville to persue his career in software engineering, graduating Vanderbilt University Code Bootcamp in the Spring of 2022 as a Certified Web Developer.  In the fall of 2022 he earned the role of Junior Software Engineer with the highly touted Software Engineering firm, Coroutine.  He now works as a freelance React/Next.JS Frontend Developer, and continues to study and further his knowledge of the latest technological advancements across the web development spectrum.",
  keywords:
    "Software, Developer, Frontend, React, Javascript, Web Development, Nashville, TN, Next.JS, Engineer, Agile, Collaboration, Tailwind, Django, Python, HTML, CSS, Bootstrap, API, REST, SOAP, GraphQL, Postgres, PostgreSQL",
  openGraph: {
    title: "William Lowrimore | Frontend Developer",
    description:
      "William Lowrimore is a frontend developer from Nashville, TN.  A former instructor, performer, and composer of music, he moved to Nashville to persue his career in software engineering, graduating Vanderbilt University Code Bootcamp in the Spring of 2022 as a Certified Web Developer.  In the fall of 2022 he earned the role of Junior Software Engineer with the highly touted Software Engineering firm, Coroutine.  He now works as a freelance React/Next.JS Frontend Developer, and continues to study and further his knowledge of the latest technological advancements across the web development spectrum.",
    type: "website",
    url: "http://www.williamlowrimore.com", // Change to your actual URL
    images: [
      {
        url: "https://res.cloudinary.com/dxvvq6h1x/image/upload/v1712924384/will_avatar_ctz0rg.webp",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavMain />
        {children}
      </body>
    </html>
  );
}
