import create from 'zustand'
import { setUser } from '../store/stores/user/user.store'
// import { mountStoreDevtool } from 'simple-zustand-devtools';
import AppStoreState from './types/interfaceStore'

export const useStore = create<AppStoreState>((set, get): AppStoreState => ({

    // #region 'GeneralState'
    user: null,

    setUser: (data) => {
        set({ user: data })
    },

    registerUser: (e) => {

        e.preventDefault()

        const firstName = e.target.firstName.value
        const lastName = e.target.lastName.value
        const email = e.target.email.value
        const birthdate = e.target.birthdate.value
        const phone = e.target.phone.value
        const username = e.target.username.value
        const password = e.target.password.value

        fetch('http://reimusabelli-001-site1.itempurl.com/api/authentication/register', {

            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ email: email, password: password, birthdate: birthdate, firstName: firstName, lastName: lastName, phone: phone, username: username })
        
        })
            .then(resp => resp.json())
            .then(data => {
                get().setUser(data)
            })

    },

    logInUser: (e) => {

        e.preventDefault()

        const dataUser = {
            username: e.target.usernameLogin.value,
            password: e.target.passwordLogin.value
        }

        fetch(`http://reimusabelli-001-site1.itempurl.com/api/authentication/login`, {

                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify(dataUser)
                
            })
        .then((resp) => resp.json())
        .then((data) => {
            localStorage.setItem('token', data.token)
        });

    }
    // #endregion

}))