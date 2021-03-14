import React from 'react';
import './custom-button.scss';

const CustomButton = ({
  children,
  invented,
  isGoogleSignin,
  ...otherProps
}) => {
  return (
    <button
      className={`${invented ? 'inverted' : ''}   ${
        isGoogleSignin ? 'google-sign-in ' : ''
      } custom-button`}
      {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
