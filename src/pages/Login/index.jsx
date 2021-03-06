import "./login.css"

export default function Login() {


    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">soundByte</h3>
                    <span className="loginDesc">Connect with the music you love.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <button className="loginButton">Log in</button>
                        <span className="loginForgot">Forgot password?</span>
                        <button className="loginRegisterButton">Create a new account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}




//function() => {
//    fetch("http://localhost:8080/api", {email: "email.value()", password:"passwordValue()"})
//}
