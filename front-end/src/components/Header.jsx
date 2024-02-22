import Logo from './Logo'
import Nav from './Nav'

export default function Header ( {loggedIn} ) {
    return (
        <header>

            <Logo />
            <Nav loggedIn={loggedIn}/>

        </header>
    )
}