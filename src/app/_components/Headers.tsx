"use client"

import { useState } from "react"
import { createStyles, Group, Header, Container, Burger, rem, Image, ActionIcon, NavLink } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { FaGithub, FaTwitter } from "react-icons/fa"
import { SiNextdotjs } from "react-icons/si"
import { PiArticleThin } from "react-icons/pi"
import { ExtanalBlankAncor } from "./ExtanalBlankAncor"
import Link from "next/link"
import { usePathname } from "next/navigation"

// import { MantineLogo } from "@mantine/ds"

export const Headers = () => {
  const { classes } = useStyles()
  const [opened, { toggle }] = useDisclosure(false)
  const pathName = usePathname()

  return (
    <Header height={56} mb={120}>
      <Container sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Burger opened={opened} onClick={toggle} size="sm" className={classes.burger} />
        <Group spacing="lg" position="left" className={classes.links}>
          <Link
            href="/"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <NavLink active={pathName === "/"} label="投稿一覧" icon={<PiArticleThin />} />
          </Link>
          <Link href="/favorite/users" style={{ textDecoration: "none", color: "black" }}>
            <NavLink active={pathName === "/favorite/users"} label="推しエンジニア" icon={<SiNextdotjs />} />
          </Link>
        </Group>

        <Image width={48} height={48} src="/images/usa.jpg" />

        <Group spacing={0} position="right" noWrap>
          <ActionIcon size="lg">
            <ExtanalBlankAncor url="https://github.com/kawabata324">
              <FaGithub color="black" />
            </ExtanalBlankAncor>
          </ActionIcon>
          <ActionIcon size="lg">
            <ExtanalBlankAncor url="https://twitter.com/haru1125632">
              <FaTwitter color="#007FFF" />
            </ExtanalBlankAncor>
          </ActionIcon>
        </Group>
      </Container>
    </Header>
  )
}

const useStyles = createStyles((theme) => ({
  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
}))
