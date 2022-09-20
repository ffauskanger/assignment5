import { useNavigate } from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate()

    return (
        <>
        <ul>
            <li className="nav-menu-button">
                <a data-toggle="dropdown"
                    href={navigate('/profile')}>Profile</a>
            </li>
            <li className="nav-menu-button">
                <a data-toggle="dropdown"
                    href={navigate('/translate')}>Profile</a>
            </li>
        </ul>
        </>
    )
}

export default Navbar