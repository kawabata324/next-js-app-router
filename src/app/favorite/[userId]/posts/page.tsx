import { PostsRepository } from "@/context/repositories/qiita/posts/PostsRepository"
import { Posts } from "@/app/_components/Posts"

async function fetchPosts(userId: string) {
  return await PostsRepository.fetchPostsByUserId(userId)
}

export default async function Page({ params: { userId } }: { params: { userId: string } }) {
  const posts = await fetchPosts(userId)
  return (
    <main>
      <Posts posts={posts} />
    </main>
  )
}
