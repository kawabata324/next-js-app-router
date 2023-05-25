import { QiitaArticles } from "@/app/types";

async function getArticles() {
  const url = " https://qiita.com//api/v2/authenticated_user/items"
  const accessToken = process.env.QIITA_ACCESS_TOKEN
  const res = await fetch(url, {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })

  if (!res.ok) {
    throw new Error("Failed to fetch article")
  }
  const data = await res.json()
  return data as QiitaArticles
}

export default async function Home() {
  const articles = await getArticles()
  return (
    <main>
      <h1>新着記事</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </main>
  )
}
