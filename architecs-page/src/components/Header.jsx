import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <header className="header">
            <NavLink to="/" className="logo">Architecs</NavLink>

            <nav className="nav">
                <ul className="nav-links">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/collection"
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        >
                            Collection
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        >
                            About
                        </NavLink>
                    </li>
                </ul>

                <button className="menu-button" aria-label="Open menu">
                    <span className="menu-line" />
                    <span className="menu-line" />
                    <span className="menu-line" />
                </button>
            </nav>
        </header>
    )
}

export default Header
