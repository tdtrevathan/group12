import { Outlet } from 'react-router-dom'
import Header from './Header'

import '../css/container.css'

export default function Container( {loggedIn} ) {
    return (
        <>
        <main id="container">
            <div id="headerContainer">
                <Header loggedIn={loggedIn}/>
            </div>
            <div id="outlet">
                <Outlet />
            </div>
        </main>
        </>
    )
}