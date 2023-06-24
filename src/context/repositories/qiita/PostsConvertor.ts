import { Posts } from "@/context/models/post/type"
import { QiitaPosts } from "./PostsRepository"
import { UTCString } from "@/functions/UTCString"

export class PostsConvertor {
  static convertPosts(data: QiitaPosts): Posts {
    return data
      .filter((post) => !post.private) // 限定公開は表示しない
      .map((post) => {
        const text = post.rendered_body.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "")
        const description = text.substring(0, 100) + "..."
        const utcStr = new UTCString(post.updated_at)
        const updatedAt = utcStr.toJSTString()

        return {
          id: post.id,
          title: post.title,
          description: description,
          updatedAt: updatedAt,
          tags: post.tags.filter((tag) => tag.name).map((tag) => tag.name),
          likesCount: post.likes_count,
        }
      })
  }
}
