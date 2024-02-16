import '../css/nav.css'

export default function Nav () {
    return (
        <nav id="mainNav">

            <a href="/">Login</a>
            <a href="/register">Register</a>
            <a href="/profile">Profile</a>
            <a href="/fuelquote">Fuel Quote</a>
            <a href="/quotehistory">Quote History</a>

        </nav> /* TODO nav only shows after login, login and register should be removed at certain point*/
    )
}