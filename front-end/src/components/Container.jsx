import { Outlet } from 'react-router-dom'
import Header from './Header'

import '../css/container.css'

export default function Container( {navShow} ) {
    return (
        <>
        <main id="container">
            <div id="headerContainer">
                <Header navShow={navShow}/>
            </div>
            <div id="outlet">
                <Outlet />
            </div>
        </main>
        </>
    )
}