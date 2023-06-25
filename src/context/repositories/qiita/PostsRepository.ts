import { Posts } from "@/context/models/post/type"
import { PostsConvertor } from "./PostsConvertor"
import { BaseHeaders } from "@/functions/BaseHeaders"
import { BASE_URL } from "@/constants/baseUrl"
import { QiitaPosts } from "./type"

export class PostsRepository {
  static readonly MAX_PAGE_LENGTH = 1
  static readonly MAX_POST_PER_PAGE = 20

  static async fetchPosts(): Promise<Posts> {
    const { QIITA_API_V2_URL } = BASE_URL
    const param = `page=${PostsRepository.MAX_PAGE_LENGTH}&per_page=${PostsRepository.MAX_POST_PER_PAGE}`
    const res = await fetch(`${QIITA_API_V2_URL}/authenticated_user/items?${param}`, {
      headers: BaseHeaders.getQiitaBaseHeader(),
    })

    if (!res.ok) {
      throw new Error("予期せぬErrorが発生しました。")
    }

    const posts = (await res.json()) as QiitaPosts

    return PostsConvertor.convertPosts(posts)
  }
}
