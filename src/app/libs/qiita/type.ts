// Qiita 投稿

// HTML形式の本文
export type QiitaRenderedBody = string

// Markdown形式の本文
export type QiitaBody = string

// 共同更新状態かどうか
export type QiitaCoediting = boolean

// この記事のコメントの数
export type QiitaCommentsCount = number

// データが作成された日時
export type QiitaCreatedAt = string

// QiitaTeamのグループを表す
export type QiitaGroup = null

// 記事の一意なID
export type QiitaId = string

// いいねの数
export type QiitaLikesCount = number

// 限定公開中かどうか
export type QiitaPrivate = boolean

// 絵文字リアクションの数
export type QiitaReactionCount = number

// この記事がストックされた数
export type QiitaStocksCount = number

// 記事についたタグ一覧
export type QiitaTags = Array<{ name: string, versions: string[] }>

// 記事のタイトル
export type QiitaTitle = string

// データが最後に更新された日時
export type QiitaUpdatedAt = string

// 記事のURL
export type QiitaURL = string

// Qiita上のUser
export type QiitaUser = {
  description: string | null
  facebook_id: string | null
  followees_count: number
  followers_count: number
  github_login_name: string | null
  id: string
  items_count: number
  linkedin_id: string | number
  location: string | null
  name: string | null
  organization: string | null
  permanent_id: number
  profile_image_url: string
  team_only: boolean
  twitter_screen_name: string | null
  website_url: string | null
}

// 閲覧数
export type QiitaPageViewsCount = number | null

// チームのメンバー情報
export type QiitaTeamMemberShip = null

// 記事のOrganizationのurl_nameを表します
export type QiitaOrganizationUrlName = string | null
