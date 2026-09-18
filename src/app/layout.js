import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       
          <h1>Lovely Professional University </h1>

          <nav>
            <Link href="/">Home</Link>{" | "}
            <Link href="/about">About</Link>{" | "}
            <Link href="/departments">Departments</Link>{" | "}
            <Link href="/contact">Contact</Link>
          </nav>
        

        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
