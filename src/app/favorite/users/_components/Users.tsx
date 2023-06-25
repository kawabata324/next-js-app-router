"use client"

import { FC } from "react"
import { User } from "./User"
import { Grid } from "@mantine/core"
import { Users as UsersType } from "@/context/models/user/type"

type Props = {
  users: UsersType
}

export const Users: FC<Props> = ({ users }) => {
  return (
    <Grid>
      {users.map((user) => (
        <Grid.Col md={6} lg={3} key={user.id}>
          <User id={user.id} avatarImageUrl={user.profileImageUrl} name={user.name} description={user.description} />
        </Grid.Col>
      ))}
    </Grid>
  )
}
