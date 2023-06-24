"use client"
import { Post as PostType } from "@/context/models/post/type"
import { Card, Text, Badge, Group, Flex } from "@mantine/core"
import { FaHeart } from "react-icons/fa"

import { FC } from "react"

type Props = {
  post: PostType
}

export const Post: FC<Props> = ({ post }) => (
  <Card
    sx={{ display: "flex", flexDirection: "column", gap: 24, justifyContent: "center" }}
    shadow="sm"
    padding="lg"
    radius="md"
    withBorder
  >
    <Group position="apart">
      <Text weight={500}>{post.title}</Text>
    </Group>

    <Flex gap={12}>
      {post.tags.map((tag) => (
        <Badge key={tag} color="pink" variant="light">
          {tag}
        </Badge>
      ))}
    </Flex>

    <Text size="sm" color="dimmed">
      {post.description}
    </Text>

    <Group position="apart">
      <Flex direction="column" justify="center" align="center">
        <FaHeart />
        <Text size="sm">{post.likesCount}</Text>
      </Flex>
      <Text size="sm">{post.updatedAt}</Text>
    </Group>
  </Card>
)
