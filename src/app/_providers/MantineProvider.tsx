"use client"

import { FC, PropsWithChildren } from "react"

type Props = {
  withGlobalStyles: boolean
  withNormalizeCSS: boolean
}

export const MantineProvider: FC<PropsWithChildren<Props>> = ({ children }) => (
  <MantineProvider withGlobalStyles withNormalizeCSS>
    {children}
  </MantineProvider>
)
