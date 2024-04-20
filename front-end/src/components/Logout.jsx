import { useNavigate } from "react-router-dom";

export default function Logout( {loggedInUsername, setLoggedInUsername, setLoggedInAddress} ) {

    const navigate = useNavigate();

    function logout() {
        setLoggedInUsername('')
        setLoggedInAddress('')
        localStorage.removeItem("username");
        navigate('/')
    }

    return (
        <>
        {loggedInUsername ? 
        <div id='logout'>
            Logged in: {loggedInUsername}
            <button onClick={logout} name="logout" type="button">Log out</button>
        </div>
        :
        ''}
        </>
    )

}