import axios from "axios"
import JwtManager from "../../features/auth/utils/jwtManager"
import { eHttpResponse } from "../../enums"

const axiosInit = async () => {
  axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}`
  axios.interceptors.request.use(request => {
    const jwt = JwtManager.accessToken
    if (jwt) {
      request.headers["Authorization"] = `Bearer ${jwt}`
    }
    return request
  })
  axios.interceptors.response.use(null, async error => {
    if (error.response) {
      if (error.response.status === eHttpResponse.Unauthorized) {
        JwtManager.clearToken()
        let urlRedirect = "/login"
        window.location.href = urlRedirect
      }
    }
    return error
  })
}

export default axiosInit
