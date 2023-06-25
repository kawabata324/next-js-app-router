"use client"

import { Avatar, Text, Button, Paper } from "@mantine/core"
import Link from "next/link"
import { FC } from "react"

interface Props {
  id: string
  avatarImageUrl: string
  name: string
  description: string
}

export const User: FC<Props> = ({ id, avatarImageUrl, name, description }) => {
  return (
    <Paper
      radius="md"
      withBorder
      p="lg"
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
      })}
    >
      <Avatar src={avatarImageUrl} size={120} radius={120} mx="auto" />
      <Text ta="center" fz="lg" weight={500} mt="md">
        {name}
      </Text>
      <Text ta="center" c="dimmed" fz="sm">
        {description}
      </Text>

      <Button variant="default" fullWidth mt="md">
        <Link href={`/favorite/${id}/posts`}>記事を見る</Link>
      </Button>
    </Paper>
  )
}
