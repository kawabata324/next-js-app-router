import { User } from "../user/type"

export type Post = {
  id: string
  title: string
  description: string
  updatedAt: string
  tags: string[] // tagNameの配列
  likesCount: number
  url: string
  user?: User
}

export type Posts = Array<Post>
