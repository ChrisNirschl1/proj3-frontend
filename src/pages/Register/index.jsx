import "./register.css"

export default function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">soundByte</h3>
                    <span className="loginDesc">Connect with the music you love.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Username" className="loginInput" />
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <input placeholder="Confirm password" className="loginInput" />
                        <button className="loginButton">Start connecting</button>
                        <button className="loginRegisterButton">Login to your account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
