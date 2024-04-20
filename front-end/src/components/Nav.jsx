import '../css/nav.css';

import { NavLink, Link } from "react-router-dom";

export default function Nav ( {loggedInUsername} ) {
    return (
        <nav id="mainNav">

            {loggedInUsername ?
                <>
                <NavLink to="/profile" className={({ isActive }) => isActive ? 'active' : ''}>Profile</NavLink>
                <NavLink to="/fuelquote" className={({ isActive }) => isActive ? 'active' : ''}>Fuel Quote</NavLink>
                <NavLink to="/quotehistory" className={({ isActive }) => isActive ? 'active' : ''}>Quote History</NavLink>
                </>
                :
                ''
            }

        </nav>
    )
}