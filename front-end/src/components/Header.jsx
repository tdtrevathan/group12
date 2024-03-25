import Logo from './Logo'
import Logout from './Logout'
import Nav from './Nav'

export default function Header ( {loggedInUsername, setLoggedInUsername} ) {
    return (
        <header>

            <Logo />
            <Nav loggedInUsername={loggedInUsername} />
            <Logout loggedInUsername={loggedInUsername} setLoggedInUsername={setLoggedInUsername} />

        </header>
    )
}