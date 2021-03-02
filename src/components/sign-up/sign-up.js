import React from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button';
import FormInput from '../form-Input/form-Input';
import './sign-up.scss';

class SignUp extends React.Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  onFormSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");

      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error(error);
    }
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    //this.setState({ name: event.target.value });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I don't have an account</h2>
        <span>Sign Up with your email and password</span>

        <form onSubmit={this.onFormSubmit}>
          <FormInput
            type='text'
            name='displayName'
            label='displayName'
            handleChange={this.handleChange}
            value={displayName}
            required
          />
          <FormInput
            type='email'
            name='email'
            label='email'
            handleChange={this.handleChange}
            value={email}
            required
          />
          <FormInput
            type='password'
            name='password'
            label='password'
            handleChange={this.handleChange}
            value={password}
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            label='Confirm Password'
            handleChange={this.handleChange}
            value={confirmPassword}
            required
          />
          <CustomButton type='submit'>Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}
export default SignUp;
