import { PostsRepository } from "@/context/repositories/qiita/PostsRepository"
import { Posts } from "./_components/Posts"

async function fetchPosts() {
  return await PostsRepository.fetchPosts()
}

export default async function Home() {
  const posts = await fetchPosts()
  return (
    <main>
      <Posts posts={posts} />
    </main>
  )
}
