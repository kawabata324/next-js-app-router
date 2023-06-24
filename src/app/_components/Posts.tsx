"use client"

import { Posts as PostsType } from "@/context/models/post/type"
import { FC } from "react"
import { Post } from "./Post"
import { Grid } from "@mantine/core"

type Props = {
  posts: PostsType
}

export const Posts: FC<Props> = ({ posts }) => {
  return (
    <Grid>
      {posts.map((post) => (
        <Grid.Col md={6} lg={3} key={post.id}>
          <Post key={post.id} post={post} />
        </Grid.Col>
      ))}
    </Grid>
  )
}
