import { Posts } from "@/context/models/post/type"
import { UTCString } from "@/functions/UTCString"
import { QiitaPosts } from "../type"

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
          url: post.url,
        }
      })
  }

  static convertPostsWithUser(data: QiitaPosts): Posts {
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
          url: post.url,
          user: {
            id: post.user.id,
            name: post.user.name || post.user.id,
            description: post.user.description ?? "",
            profileImageUrl: post.user.profile_image_url,
            itemsCount: post.user.items_count,
          },
        }
      })
  }
}
