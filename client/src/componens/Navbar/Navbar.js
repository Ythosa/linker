import React, {useContext} from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext";

export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    return (
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">Shorten your link</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/create">Create</NavLink></li>
                    <li><NavLink to="/links">Links</NavLink></li>
                    <li>
                        <a href="/" className="waves-effect waves-light btn" onClick={ logoutHandler }>
                            Log out
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}