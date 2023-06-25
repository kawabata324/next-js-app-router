import { Users, User } from "@/context/models/user/type"
import { QiitaUsers, QiitaUser } from "../type"

export class UserConvertor {
  static convertUsers(data: QiitaUsers): Users {
    return data.map((user) => {
      return UserConvertor.convertUser(user)
    })
  }

  static convertUser(data: QiitaUser): User {
    return {
      id: data.id,
      name: data.name || data.id,
      description: data.description || "",
      itemsCount: data.items_count,
      profileImageUrl: data.profile_image_url,
    }
  }
}
