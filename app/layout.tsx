import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sherwin Romano | Web Developer",
  description:
    "Hello, I'm Sherwin Romano, a junior front-end developer focused on building responsive, maintainable web apps. Skilled at turning designs into pixel-perfect, production-ready code using modern frameworks and best practices.",
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
        <main className="flex flex-col xs:p-5 sm:p-8 xs:gap-0 sm:gap-[10rem]">
          <section className="w-full flex justify-between h-fit xs:flex-col sm:flex-row xs:gap-[3rem] sm:gap-0 xs:pb-4 sm:pb-0">
            <h1 className="font-bold xs:text-[1.3rem] sm:text-2xl">
              Sherwin Romano,
              <span className="block font-light text-[#ababab] tracking-tight">
                Web Developer
              </span>
            </h1>
            <h2 className="font-bold xs:text-[1.3rem] sm:text-2xl flex items-center h-fit w-fit xs:gap-1 sm:gap-2">
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
