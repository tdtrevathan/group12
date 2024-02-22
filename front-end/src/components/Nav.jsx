import '../css/nav.css'

import { Link } from "react-router-dom";

export default function Nav ( {loggedIn} ) {
    return (
        <nav id="mainNav">

            {loggedIn ?
                <>
                <Link to="/profile">Profile</Link>
                <Link to="/fuelquote">Fuel Quote</Link>
                <Link to="/quotehistory">Quote History</Link>
                </>
                :
                ''
            }

        </nav> /* TODO nav only shows after login, login and register should be removed at certain point*/
    )
}