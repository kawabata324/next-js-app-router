export type Post = {
  id: string
  title: string
  description: string
  updatedAt: string
  tags: string[] // tagNameの配列
  likesCount: number
  url: string
}

export type Posts = Array<Post>
