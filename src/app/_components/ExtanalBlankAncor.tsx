import { FC, PropsWithChildren } from "react"

type Props = {
  url: string
}

export const ExtanalBlankAncor: FC<PropsWithChildren<Props>> = ({ url, children }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
    {children}
  </a>
)
