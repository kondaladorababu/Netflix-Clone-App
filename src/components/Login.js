import React, { useState } from 'react';
import '../styles/Login.css';
import SignUpScreen from './SignUpScreen';

function Login() {
    const [signIn, setSignIn] = useState(false);
    const openSignInPage = () => {
        setSignIn(true);
    }

    return (
        <div className='login_screen'>
            <div className="loginScreen_background">
                <img className="loginScreen_logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netflix_LOGO" />
                <button className='loginScreen_button' onClick={openSignInPage}>Sign In</button>
                <div className="loginScreen_gradient"></div>
            </div>

            <div className="loginScreen_body">
                {signIn ? <SignUpScreen /> : (
                    <>
                        <h1>Enjoy big movies, hit series and more from ₹ 149.</h1>
                        <h2>Join today. Cancel anytime.</h2>
                        <h3>
                            Ready to watch? Enter your email to create or restart your membership.
                        </h3>
                        <div className="loginScreen_input">
                            <form >
                                <input type="email" placeholder='Email Address' />
                                <button className='loginScreen_getStarted' onClick={openSignInPage}>GET STARTED</button>
                            </form>
                        </div>
                    </>
                )}

            </div>
        </div>
    )
}

export default Login
