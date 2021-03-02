import React from 'react';
import SignIn from '../../sign-in/sign-in';
import SignUp from '../../sign-up/sign-up';
import './sign-in-and-sign-out.scss';

const SignInAndSignOut = () => {
  return (
    <div className='sign-in-and-sign-out'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignOut;
