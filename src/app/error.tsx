"use client"

import { FC, useEffect } from "react"

type Props = {
  error: Error
  reset: () => void
}

const Error: FC<Props> = ({ error, reset }) => {
  useEffect(() => {
    console.error(error)
    return () => console.clear()
  }, [error])

  return (
    <div>
      <h1>予期しないErrorが発生しました</h1>
      <button className="btn btn-outline" onClick={() => reset()}>
        Try again
      </button>
    </div>
  )
}

export default Error
