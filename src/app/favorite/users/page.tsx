import { UserRepository } from "@/context/repositories/qiita/users/UserRepository"
import { Users } from "./_components/Users"
import { USER_IDS } from "./_constants/userIds"

async function fetchUsers() {
  return await UserRepository.fetchUsersByUserIds(USER_IDS)
}

export default async function Page() {
  const users = await fetchUsers()
  return (
    <main>
      <Users users={users} />
    </main>
  )
}
