import { Posts } from "@/context/models/post/type"
import { PostsConvertor } from "./PostsConvertor"
import { BaseUrl } from "@/functions/BaseUrl"
import { BaseHeaders } from "@/functions/BaseHeaders"

//https://qiita.com/api/v2/docs#%E3%82%B0%E3%83%AB%E3%83%BC%E3%83%97
type QiitaGroup = {
  created_at: string // データが作成された日時 "2000-01-01T00:00:00+00:00"
  description: string // グループの詳細 "This group is for developers."
  name: string // グループに付けられた表示用の名前 "Dev"
  private: boolean // 非公開グループかどうか
  updated_at: string // データが最後に更新された日時 "2000-01-01T00:00:00+00:00"
  url_name: string // グループのチーム上での一意な名前  "dev"
}

// https://qiita.com/api/v2/docs#%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC
type QiitaUser = {
  description: string | null // 自己紹介文  "Hello, world."
  facebook_id: string | null // Facebook ID "qiita"
  followees_count: number // このユーザーがフォローしているユーザーの数 100
  followers_count: number // このユーザーをフォローしているユーザーの数 200
  github_login_name: string | null // GitHub ID "qiitan"
  id: string // ユーザーID "qiita"
  items_count: number // このユーザーが qiita.com 上で公開している記事の数 (Qiita Teamでの記事数は含まれません) 300
  linkedin_id: string | null // LinkedIn ID "qiita"
  location: string | null // 居住地 "Tokyo, Japan"
  name: string | null // 設定している名前 "Qiita キータ"
  organization: string | null // 所属している組織 "Qiita Inc."
  permanent_id: number // ユーザーごとに割り当てられる整数のID 1
  profile_image_url: string // 設定しているプロフィール画像のURL "https://s3-ap-northeast-1.amazonaws.com/qiita-image-store/0/88/ccf90b557a406157dbb9d2d7e543dae384dbb561/large.png?1575443439"
  team_only: boolean // Qiita Team専用モードに設定されているかどうか false
  twitter_screen_name: string | null // Twitterのスクリーンネーム "qiita"
  website_url: string | null // 設定しているWebサイトのURL "https://qiita.com"
}

// TODO: 実際にAPIを叩いてみて型限定できそうか調査する
type TagKey = "name" | "versions"
type QiitaPostTag = { [tag in TagKey]: string }
// https://qiita.com/api/v2/docs#%E6%8A%95%E7%A8%BF
type QiitaPost = {
  rendered_body: string // HTML形式の本文 "<h1>Example</h1>"
  body: string // Markdown形式の本文 "# Example"
  coediting: boolean // この記事が共同更新状態かどうか (Qiita Teamでのみ有効) false
  comments_count: number // この記事へのコメント数 100
  created_at: string // データが作成された日時 "2000-01-01T00:00:00+00:00"
  group: QiitaGroup // Qiita Teamのグループ
  id: string // 記事の一意なID "c686397e4a0f4f11683d"
  likes_count: number // この記事への「いいね」の数（Qiitaでのみ有効) 100
  private: boolean // 限定共有状態かどうかを表すフラグ (Qiita Teamでは無効)false
  reactions_count: number // 絵文字リアクションの数（Qiita Teamでのみ有効） 100
  stock_count: number // この記事がストックされた数 100
  tags: QiitaPostTag[] // 記事についたタグ一覧 [{"name"=>"Ruby", "versions"=>["0.0.1"]}]
  title: string // 記事のタイトル "Example title"
  updated_at: string // データが最後に更新された日時 "2000-01-01T00:00:00+00:00"
  url: string // 記事のURL "https://qiita.com/Qiita/items/c686397e4a0f4f11683d"
  user: QiitaUser // Qiita上のユーザー
  page_view_count: number | null // 閲覧数 100
  team_membership: any // Qiita Team のチームメンバー情報を表します。
  organization_url_name: string | null // 記事のOrganization の url_name "qiita-inc"
}

export type QiitaPosts = Array<QiitaPost>

export class PostsRepository {
  static readonly MAX_PAGE_LENGTH = 1
  static readonly MAX_POST_PER_PAGE = 20

  static async fetchPosts(): Promise<Posts> {
    const param = `page=${PostsRepository.MAX_PAGE_LENGTH}&per_page=${PostsRepository.MAX_POST_PER_PAGE}`
    const res = await fetch(`${BaseUrl.QIITA_API_V2_URL}/authenticated_user/items?${param}`, {
      headers: BaseHeaders.getQiitaBaseHeader(),
    })

    console.log(res)
    if (!res.ok) {
      throw new Error("予期せぬErrorが発生しました。")
    }

    const posts = (await res.json()) as QiitaPosts

    return PostsConvertor.convertPosts(posts)
  }
}
