import Logo from './Logo'
import Nav from './Nav'

export default function Header ( {navShow} ) {
    return (
        <header>

            <Logo />
            <Nav navShow={navShow}/>

        </header>
    )
}