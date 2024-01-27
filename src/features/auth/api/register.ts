import axios from "axios"
import { TUser } from "../../../types"

export async function registerUser(user: TUser): Promise<any> {
  const { data } = await axios.post("register", user)
  return data
}
