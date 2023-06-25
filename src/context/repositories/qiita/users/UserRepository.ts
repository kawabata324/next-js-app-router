import { BASE_URL } from "@/constants/baseUrl"
import { QiitaUser } from "../type"
import { User, Users } from "@/context/models/user/type"
import { UserConvertor } from "./UserConvertor"

export class UserRepository {
  static async fetchUsersByUserIds(userIds: readonly string[]): Promise<Users> {
    const promises = userIds.map(async (userId) => {
      const user = await UserRepository.fetchUserById(userId)
      return user
    })

    return Promise.all([...promises])
  }

  static async fetchUserById(userId: string): Promise<User> {
    const { QIITA_API_V2_URL } = BASE_URL
    const res = await fetch(`${QIITA_API_V2_URL}/users/${userId}`)

    if (!res.ok) {
      throw new Error("予期せぬErrorが発生しました。")
    }

    const user = (await res.json()) as QiitaUser

    return UserConvertor.convertUser(user)
  }
}
