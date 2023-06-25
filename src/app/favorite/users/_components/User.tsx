"use client"

import { Avatar, Text, Button, Paper } from "@mantine/core"
import { FC } from "react"

interface Props {
  avatarImageUrl: string
  name: string
  description: string
}

export const User: FC<Props> = ({ avatarImageUrl, name, description }) => {
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
        投稿を見る
      </Button>
    </Paper>
  )
}
