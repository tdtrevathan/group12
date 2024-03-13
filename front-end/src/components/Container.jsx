import { Outlet } from 'react-router-dom'
import Header from './Header'

import '../css/container.css'

export default function Container( {loggedInID} ) {
    return (
        <>
        <main id="container">
            <div id="headerContainer">
                <Header loggedInID={loggedInID}/>
            </div>
            <div id="outlet">
                <Outlet />
            </div>
        </main>
        </>
    )
}