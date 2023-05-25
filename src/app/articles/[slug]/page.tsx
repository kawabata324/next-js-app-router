import React from "react";

type Props = {
  params: { slug: string }
}
const Article: React.FC<Props> = ({ params: { slug } }) => (
  <div>
    <h1>記事の詳細</h1>
    <p>記事のスラッグ: {slug}</p>
  </div>
)

export default Article
