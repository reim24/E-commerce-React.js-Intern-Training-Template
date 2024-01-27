/* eslint-disable no-useless-concat */
import { eStorageType } from "../enums"
import PropertyManager from "./propertyManager"
import { EncryptStorage } from "encrypt-storage"

class AppStorageManager {
  private static _encryptLocalStorage: EncryptStorage
  private static _encryptSessionStorage: EncryptStorage

  private static get encryptLocalStorage(): EncryptStorage {
    if (
      !AppStorageManager._encryptLocalStorage &&
      import.meta.env.VITE_LOCAL_KEY
    ) {
      AppStorageManager._encryptLocalStorage = new EncryptStorage(
        import.meta.env.VITE_LOCAL_KEY,
        { storageType: "localStorage" },
      )
    }
    return AppStorageManager._encryptLocalStorage
  }
  private static get encryptSessionStorage(): EncryptStorage {
    if (
      !AppStorageManager._encryptSessionStorage &&
      import.meta.env.VITE_SESSION_KEY
    ) {
      AppStorageManager._encryptSessionStorage = new EncryptStorage(
        import.meta.env.VITE_SESSION_KEY,
        { storageType: "sessionStorage" },
      )
    }
    return AppStorageManager._encryptSessionStorage
  }
  static getItem(
    key: string,
    defaultValue?: any,
    family: eStorageType = eStorageType.Local,
  ) {
    let valToReturn = null
    switch (family) {
      case eStorageType.Local:
        valToReturn = AppStorageManager.encryptLocalStorage.getItem(key)
        break
      case eStorageType.Session:
        valToReturn = AppStorageManager.encryptSessionStorage.getItem(key)

        break
      default:
        new Error("AppStorageManager.getItem: case not defined")
    }
    return PropertyManager.getValueOrDefault<string>(valToReturn, defaultValue)
  }
  static setItem(
    key: string,
    value: string,
    family: eStorageType = eStorageType.Local,
  ) {
    switch (family) {
      case eStorageType.Local:
        AppStorageManager.encryptLocalStorage.setItem(key, value)
        break
      case eStorageType.Session:
        AppStorageManager.encryptSessionStorage.setItem(key, value)
        break
      default:
        new Error("AppStorageManager.setItem: case not defined")
    }
  }
  static removeItem(key: string, family: eStorageType = eStorageType.Local) {
    switch (family) {
      case eStorageType.Local:
        AppStorageManager.encryptLocalStorage.removeItem(key)
        break
      case eStorageType.Session:
        AppStorageManager.encryptSessionStorage.removeItem(key)
        break
      default:
        new Error("AppStorageManager.removeItem: case not defined")
    }
  }
}

export default AppStorageManager
