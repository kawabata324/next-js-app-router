import {
  QiitaBody,
  QiitaCoediting,
  QiitaCommentsCount,
  QiitaCreatedAt,
  QiitaGroup,
  QiitaId,
  QiitaLikesCount,
  QiitaOrganizationUrlName,
  QiitaPageViewsCount,
  QiitaPrivate,
  QiitaReactionCount,
  QiitaRenderedBody,
  QiitaStocksCount,
  QiitaTags,
  QiitaTeamMemberShip,
  QiitaTitle,
  QiitaUpdatedAt,
  QiitaURL,
  QiitaUser
} from "@/app/libs/qiita/type";

export type QiitaArticle = {
  rendered_body: QiitaRenderedBody
  body: QiitaBody
  coediting: QiitaCoediting
  comments_count: QiitaCommentsCount
  created_at: QiitaCreatedAt
  group: QiitaGroup
  id: QiitaId
  likes_count: QiitaLikesCount
  private: QiitaPrivate
  reactions_count: QiitaReactionCount
  stocksCount: QiitaStocksCount
  tags: QiitaTags
  title: QiitaTitle,
  updated_at: QiitaUpdatedAt,
  url: QiitaURL
  user: QiitaUser
  page_view_count: QiitaPageViewsCount
  team_membership: QiitaTeamMemberShip
  organization_url_name: QiitaOrganizationUrlName
}

export type QiitaArticles = Array<QiitaArticle>
