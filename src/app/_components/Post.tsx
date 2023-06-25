"use client"
import { Post as PostType } from "@/context/models/post/type"
import { Card, Text, Badge, Group, Flex, Avatar } from "@mantine/core"
import { FaHeart } from "react-icons/fa"

import { FC } from "react"
import { User } from "@/context/models/user/type"

type Props = {
  post: PostType
  user?: User
}

export const Post: FC<Props> = ({ post, user }) => (
  <Card
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: 24,
      justifyContent: "center",
      alignItems: "spece-between",
      backgroundImage: `url("/images/qiita.png")`,
      backgroundSize: "cover",
      backgroundColor: "rgba(255,255,255, 0.9)",
      backgroundBlendMode: "lighten",
      height: "100%",
    }}
    shadow="sm"
    padding="lg"
    radius="md"
    withBorder
  >
    <Group position="apart">
      <Text weight={500}>{post.title}</Text>
    </Group>

    {user && (
      <Group position="right" spacing="md">
        <Avatar src={user.profileImageUrl} size={36} radius={36} />
        <Text fz="lg">{user.name}</Text>
      </Group>
    )}
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
        <FaHeart color="pink" />
        <Text size="sm">{post.likesCount}</Text>
      </Flex>
      <Text size="sm">{post.updatedAt}</Text>
    </Group>
  </Card>
)
