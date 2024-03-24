import '../css/nav.css';

import { NavLink, Link } from "react-router-dom";

export default function Nav ( {loggedInID} ) {
    return (
        <nav id="mainNav">

            {loggedInID ?
                <>
                <NavLink to="/profile" className={({ isActive }) => isActive ? 'active' : ''} activeClassName="active">Profile</NavLink>
                <NavLink to="/fuelquote" className={({ isActive }) => isActive ? 'active' : ''} activeClassName="active">Fuel Quote</NavLink>
                <NavLink to="/quotehistory" className={({ isActive }) => isActive ? 'active' : ''} activeClassName="active">Quote History</NavLink>
                </>
                :
                ''
            }

        </nav> /* TODO nav only shows after login, login and register should be removed at certain point*/
    )
}