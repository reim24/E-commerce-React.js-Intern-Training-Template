import axios from "axios"
import { TRegisterRequest } from "../types"

export async function registerUser(user: TRegisterRequest): Promise<any> {
  const { data } = await axios.post("register", user)
  return data
}
