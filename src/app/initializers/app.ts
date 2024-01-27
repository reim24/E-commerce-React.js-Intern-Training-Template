import { me } from "../../features/auth/api/login"
import JwtManager from "../../features/auth/utils/jwtManager"
import axiosInit from "./axios"

const initApp = async () => {
  await axiosInit()
  let currentUser = null
  try {
    if (JwtManager.accessToken) {
      currentUser = await me(JwtManager.accessToken)
    }
  } catch (e) {
    console.log("initApp.JwtManager.accessToken error")
  }
  return currentUser
}
export default initApp
