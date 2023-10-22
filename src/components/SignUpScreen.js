import React from 'react';
import '../styles/SignUpScreen.css';

function SignUpScreen() {
  
  return (
    <div className='signUpScreen'>
      <form action="">
        <h1>Sign In</h1>
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='password' />
        <button type='submit'> Sign In</button>

        <h4>
          <span className='signUpScreen_grey'>New to Netflix?</span>
          <span className='signUpScreen_link'> Sign Up now.</span></h4>
      </form>

    </div>
  )
}

export default SignUpScreen
