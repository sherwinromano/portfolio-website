import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sherwin Romano | Web Developer",
  description: "Hello, there",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <main className="flex flex-col p-8 gap-12 h-auto">
          <section className="w-full flex justify-between h-[10rem]">
            <h1 className="font-bold text-2xl ">
              Sherwin Romano,
              <span className="block font-light text-[#ababab] tracking-tight">
                Web Developer
              </span>
            </h1>
            <h2 className="font-bold text-2xl flex items-center h-fit gap-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </span>
              Cebu, Philippines
            </h2>
          </section>
          {children}
        </main>
      </body>
    </html>
  );
}
