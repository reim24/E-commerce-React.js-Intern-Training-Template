import { useSelector } from "react-redux"
import { RootState } from "../app/store"

const useGetUser = () => {
  const currentUser = useSelector((state: RootState) => state.user.value)
  return currentUser
}
export default useGetUser
