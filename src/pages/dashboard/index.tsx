import { FC, useState } from "react"
import { useDispatch } from "react-redux"
import onLogout from "../../main/store/stores/user/login.store.on-logout"
import './dashboard.css'


const DashboardPage: FC = () => {

    const dispatch = useDispatch()

    const handleSubmit = () => {
        dispatch(onLogout())
    }

    return (
        <>
            <section className="wrapper">
                <header className="header">
                    <nav className="main_nv">
                        <ul className="headerUl">
                            <li className="headerli">
                                cart
                            </li>
                            <li className="headerli">
                                <button onClick={handleSubmit}> signout</button>
                            </li>
                        </ul>
                    </nav>
                </header>
            </section>
            <main className="mainSection">
                <div className='home__section'>
                    <div className='card'>
                        <img src='' alt="IMAGE" />
                        <div className="card__info">
                            <div className="title_Price">
                                <h2>title</h2>
                                <h4> Price</h4>
                            </div>
                            <h3>description</h3>
                        </div>

                    </div>
                </div>
            </main>
        </>

    )
}

export default DashboardPage