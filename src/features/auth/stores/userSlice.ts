import { PayloadAction } from "@reduxjs/toolkit"
import { TUser } from "../../../types"
import { createAppSlice } from "../../../app/createAppSlice"
import { TLoginRequest } from "../types"
import { loginWithCredentials } from "../api/login"
import { registerUser } from "../api/register"
import JwtManager from "../utils/jwtManager"

export interface UserSliceState {
  value: TUser | null
}
const initialState: UserSliceState = {
  value: null,
}
export const userSlice = createAppSlice({
  name: "user",
  initialState: initialState,
  reducers: create => ({
    set: create.reducer((state, action: PayloadAction<TUser>) => {
      state.value = action.payload
    }),
    login: create.asyncThunk(
      async (payload: TLoginRequest) => {
        const response = await loginWithCredentials(payload)
        return response
      },
      {
        fulfilled: (state, action) => {
          state.value = action.payload.user
          JwtManager.setAccessToken(action.payload.accessToken)
        },
        rejected: _state => {
          console.log("login failed")
        },
      },
    ),
    register: create.asyncThunk(
      async (payload: TUser) => {
        const response = await registerUser(payload)
        return { accessToken: response.accessToken, user: payload }
      },
      {
        fulfilled: (state, action) => {
          state.value = action.payload.user
          JwtManager.setAccessToken(action.payload.accessToken)
        },
        rejected: _state => {
          console.log("register failed")
        },
      },
    ),
    logout: create.asyncThunk(
      async () => {
        JwtManager.clearToken()
        return
      },
      {
        fulfilled: state => {
          state.value = null
        },
        rejected: _state => {
          console.log("register failed")
        },
      },
    ),
  }),
  selectors: {
    selectUser: state => state.value,
  },
})

export const { set, login, register, logout } = userSlice.actions

export const { selectUser } = userSlice.selectors
