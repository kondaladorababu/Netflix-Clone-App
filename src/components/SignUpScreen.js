import React, { useRef } from 'react';
import '../styles/SignUpScreen.css';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth"

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser);
    }).catch((error) => {
      alert(error.message);
    });
  }
  

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser);
    }).catch((error) => {
      alert(error.message);
    });
  }

  return (
    <div className='signUpScreen'>
      <form action="">
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder='Email' />
        <input ref={passwordRef} type="password" placeholder='password' />
        <button type='submit' onClick={signIn}> Sign In</button>

        <h4>
          <span className='signUpScreen_grey'>New to Netflix?</span>
          <span className='signUpScreen_link' onClick={register}> Sign Up now.</span></h4>
      </form>

    </div>
  )
}

export default SignUpScreen
