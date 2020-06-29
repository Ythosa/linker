import React, { useContext, useEffect } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    useEffect(() => {
        let elements = document.querySelectorAll('.sidenav');
        let instances = window.M.Sidenav.init(elements);
    }, [])

    return (
        <React.Fragment>
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">
                    <i className="material-icons">photo_size_select_small</i>
                    Linker
                </a>
                <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/create">Create</NavLink></li>
                    <li><NavLink to="/links">Links</NavLink></li>
                    <li>
                        <a href="/" className="waves-effect waves-purple btn" onClick={ logoutHandler }>
                            Sign out
                            <i className="material-icons right">logout</i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
            <li><NavLink to="/create">Create</NavLink></li>
            <li><NavLink to="/links">Links</NavLink></li>
            <li>
                <a href="/" className="waves-effect waves-purple btn" onClick={ logoutHandler }>
                    Sign out
                    <i className="material-icons right">logout</i>
                </a>
            </li>
        </ul>
        </React.Fragment>
    )
}
