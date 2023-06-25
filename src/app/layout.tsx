import { Headers } from "./_components/Headers"

export const metadata = {
  title: "Kawabata Engineer Blog",
  description: "川端のエンジニア個人ブログ, 技術的なことを発信",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <Headers />
        {children}
      </body>
    </html>
  )
}
