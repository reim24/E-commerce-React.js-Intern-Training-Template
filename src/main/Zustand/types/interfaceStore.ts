import React from "react"

export default interface AppStoreState {
    user: any,
    setUser: (data: any) => void,
    registerUser: (e: any) => void,
    logInUser: (e: any) => void
}