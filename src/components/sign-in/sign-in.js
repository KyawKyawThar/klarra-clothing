import React from 'react';
import './sign-in.scss';
import FormInput from '../form-Input/form-Input';
import CustomButton from '../custom-button/custom-button';

class SignIn extends React.Component {
  state = {
    email: '',
    password: '',
  };

  onFormSubmit = (event) => {
    event.preventDefault();
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className='sign-in'>
        <h1>I already have an account</h1>
        <span>SignIn with your username and password</span>

        <form onSubmit={this.onFormSubmit}>
          <FormInput
            name='email'
            type='email'
            label='email'
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />

          <FormInput
            name='password'
            type='password'
            label='password'
            handleChange={this.handleChange}
            value={this.state.password}
            required
          />
          <CustomButton type='submit'>Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
