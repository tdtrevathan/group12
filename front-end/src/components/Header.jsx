import Logo from './Logo'
import Nav from './Nav'

export default function Header ( {loggedInID} ) {
    return (
        <header>

            <Logo />
            <Nav loggedInID={loggedInID}/>

        </header>
    )
}