import "./globals.css"
import Link from "next/link"

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head />
      <body className="flex flex-col min-h-screen">
        <header className="navbar bg-base-100 flex justify-between">
          <button className="btn btn-ghost normal-case text-xl">
            <Link href="/">ブログ</Link>
          </button>
          <button className="btn btn-ghost normal-case text-xl">
            <Link href="/articles/new">記事を書く</Link>
          </button>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
          <div>
            <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
