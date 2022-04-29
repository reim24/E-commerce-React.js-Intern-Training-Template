import Header from "../dashboard/Header"
import './profile.css'


const Profile = () => {

    return <section className="profile_wrapper">
        <Header />

        <div className="sidebar">
            <div className="sidebar__top">
                <h2>firstname</h2>
                <h4>lastname</h4>
            </div>

            <div className="sidebar__bottom">
                <p>Transactions</p>
                <div className="booked_container">
                    <div className="profile_main-body">
                        <div className="profile_user_card" >
                            <div className="profile_card">
                                <div className="card-body">
                                    <img src='' alt="User" className="logo_card" />
                                    <p className="user_proffesion">name$</p>
                                    <p className="User_location">info</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section >
}

export default Profile