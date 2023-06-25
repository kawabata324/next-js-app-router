import { UserRepository } from "@/context/repositories/qiita/UserRepository"
import { Users } from "./_components/Users"

async function fetchUsers() {
  const userIds = ["Yametaro", "uhyo", "honey32", "suin", "os1ma"]
  return await UserRepository.fetchUsersByUserIds(userIds)
}

export default async function Page() {
  const users = await fetchUsers()
  return (
    <main>
      <Users users={users} />
    </main>
  )
}
