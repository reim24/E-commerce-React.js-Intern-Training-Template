import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import onLogout from "../../main/store/stores/user/login.store.on-logout"


const Header = () => {

    const dispatch = useDispatch()

    const handleSubmit = () => {
        dispatch(onLogout())
    }

    return (
        <header className="header">
            <nav className="nav_left">
                <ul className="headerUl">
                    <Link to={`/cart`}>
                        <li className="headerli">
                            cart
                        </li>
                    </Link>
                    <Link to={`/`}>
                        <li className="headerli">
                            Home
                        </li>
                    </Link>
                </ul>
            </nav>

            <nav className="nav_right">
                <ul className="headerUl">
                    <li className="headerli">
                        <button onClick={handleSubmit}> signout</button>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default Header