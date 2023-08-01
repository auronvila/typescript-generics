import {useState} from "react";

interface AuthUserProps{
    name:string,
    email:string,
}

export default function IsLoggedIn(){

    const [login, setLogin] = useState<AuthUserProps | null >(null)
    const handleLogIn = () => {
        setLogin({
            name:'Auron',
            email:'auron@example.com'
        })
    }
    const handleLogOut = () => {
        setLogin(null)
    }
    return(
        <div>
            <button disabled={true} onClick={handleLogIn}>LogIn</button>
            <button onClick={handleLogOut}>LogOut</button>
            <h5>{login ? `${login.name} ${login.email}` : 'click to log in '}</h5>
        </div>
    )
}