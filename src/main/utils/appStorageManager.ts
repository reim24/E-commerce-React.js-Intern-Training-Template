/* eslint-disable no-useless-concat */
import eInfoTypeStorage from "../assets/enums/eStorageType";
import PropertyManager from "./propertyManager";
import { EncryptStorage } from 'encrypt-storage';

class AppStorageManager {
  private static _encryptLocalStorage: EncryptStorage;
  private static _encryptSessionStorage: EncryptStorage;

  private static get encryptLocalStorage(): EncryptStorage {
    if (!AppStorageManager._encryptLocalStorage) {
      AppStorageManager._encryptLocalStorage = new EncryptStorage(process.env.REACT_APP_LOCAL_KEY, { storageType: 'localStorage' });
    }
    return AppStorageManager._encryptLocalStorage;

  }
  private static get encryptSessionStorage(): EncryptStorage {
    if (!AppStorageManager._encryptSessionStorage) {
      AppStorageManager._encryptSessionStorage = new EncryptStorage(process.env.REACT_APP_SESSION_KEY, { storageType: 'sessionStorage' });
    }
    return AppStorageManager._encryptSessionStorage;

  }
  static getItem(key: string, defaultValue?: any, family: eInfoTypeStorage = eInfoTypeStorage.Local) {
    let valToReturn  = null;
    switch (family) {
      case eInfoTypeStorage.Local:
        valToReturn = AppStorageManager.encryptLocalStorage.getItem(key);
        break;
      case eInfoTypeStorage.Session:
        valToReturn = AppStorageManager.encryptSessionStorage.getItem(key);

        break;
      default:
        new Error("AppStorageManager.getItem: case not defined");
    }
    return PropertyManager.getValueOrDefault<string>(valToReturn, defaultValue);
  }
  static setItem(key: string, value: string, family: eInfoTypeStorage = eInfoTypeStorage.Local) {
    switch (family) {
      case eInfoTypeStorage.Local:
        AppStorageManager.encryptLocalStorage.setItem(key, value);
        break;
      case eInfoTypeStorage.Session:
        AppStorageManager.encryptSessionStorage.setItem(key, value);
        break;
      default:
        new Error("AppStorageManager.setItem: case not defined");
    }
  }
  static removeItem(key: string, family: eInfoTypeStorage = eInfoTypeStorage.Local) {
    switch (family) {
      case eInfoTypeStorage.Local:
        AppStorageManager.encryptLocalStorage.removeItem(key);
        break;
      case eInfoTypeStorage.Session:
        AppStorageManager.encryptSessionStorage.removeItem(key);
        break;
      default:
        new Error("AppStorageManager.removeItem: case not defined");
    }
  }
}

export default AppStorageManager;
