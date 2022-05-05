import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import onLogout from "../../main/store/stores/user/login.store.on-logout"
import Button from '@mui/material/Button';

const Header = ({ setSearch }: any) => {

    const dispatch = useDispatch()

    const handleSubmit = () => {
        dispatch(onLogout())
    }

    return (
        <header className="header">
            <nav className="nav_left">
                <ul className="headerUl">
                    <Link to={`/`}>
                        <li className="headerli_left">
                            Home
                        </li>
                    </Link>
                </ul>
                <ul className="headerUl">
                    <li className="headerli">
                        <input className="search_bar" type="search" placeholder="Search..." name="search" onChange={e => {
                            setSearch(e.target.value)
                        }} />
                    </li>
                </ul>
            </nav>
            <nav className="nav_right">
                <ul className="headerUl">
                    <Link to={`/cart`}>
                        <li className="headerli">
                            cart
                        </li>
                    </Link>
                    <Link to={`/profile`}>
                        <li className="headerli">
                            profile
                        </li>
                    </Link>
                    <li className="headerli">
                        <Button className="primary" color="secondary" variant="outlined" onClick={handleSubmit} sx={{
                            color: "white",
                            borderColor: 'white'
                        }}>Sign Out</Button>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default Header