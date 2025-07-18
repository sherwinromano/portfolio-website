import type { Metadata } from "next";
import "./globals.css";
import Animate from "./components/Animate";

export const metadata: Metadata = {
  title: "Sherwin Romano | Web Developer",
  description:
    "Hello, I'm Sherwin Romano, a junior front-end web developer focused on building responsive and dynamic web applications. Skilled at turning designs into pixel-perfect, production-ready code using modern frameworks and best practices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased">
        <Animate children={children} />
      </body>
    </html>
  );
}
