import React, { useReducer, useRef, useState } from 'react';
import styled from 'styled-components';
import facebookIcon from '../assets/facebook-icon.svg';
import googleIcon from '../assets/google-icon.svg';
import appleIcon from '../assets/apple-icon.svg';
import showPassword from '../assets/show-password.svg';
import { Form } from './FormStyles';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  ContainerInput,
  Input,
  InputSubmit,
  Img,
  ButtonForShowPassword,
} from './smallComponents/InputStyles';
import { Header, Description, Option, PrefixInput } from './DescriptionsStyles';
import './css/LoginPage.scss';
import Users from './jsonFiles/users.json';
import { AuthData } from '../auth/AuthWrapper';

function LoginPage() {
  // ---------------------- LOGIN VIA REACT RENDER AND NAVIAGTION ------------------------
  const navigate = useNavigate();
  const { login } = AuthData();
  const [formData, setFormData] = useReducer((formData, newItem) => {return ( {...formData, ...newItem})}, {userName: '', password: 'pass'})
  const [errorMessage, setErrorMesage] = useState(null);
  
  // const doLogin = async () => {
  //   try {
  //     await login(formData.userName, formData.password);
  //     navigate('/home');
  //   } catch(err) {
  //     setErrorMesage(err);
  //   }
  // }


  // END
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [emailInput, setEmailInput] = useState();
  const [passwordInput, setPasswordInput] = useState();

  const icons = [
    { src: facebookIcon, alt: 'Facebook icon' },
    { src: googleIcon, alt: 'Google Icon' },
    { src: appleIcon, alt: 'Apple icon' },
  ];

  // --------------------- LOGIN CONDITIONS ---------------------

  //finding user with enter email
  const loggedUser = Users.filter(({ email }) => email === emailInput);
  const [linkTo, setLinkTo] = useState('/');
  const [showLink, setShowLink] = useState(false);

  const handleLoginButton = () => {
    const password = loggedUser.map(({ password }) => password)[0];
    console.log(password);

    if (!loggedUser) {
      console.log('Error in your email');
    } else {
      console.log('Correct email');

      if (passwordInput === password) {
        console.log('and correct password!');
        setLinkTo('/home');
        setShowLink(true);

        console.log(linkTo);
      } else {
        console.log('but wroing password');
        setLinkTo('/');
        setShowLink(false);
        console.log(linkTo);
      }
    }
  };
  //Link element is existing before variable linkTo will be change

  const handleShowPassword = () => {
    const passwordInput = document.getElementById('password');
    if (passwordInput) {
      passwordInput.type =
        passwordInput.type === 'password' ? 'text' : 'password';
    }
  };  

  const onChangeEmailButton = (e) => {
    setEmailInput(e.target.value);
  };

  const onChangePasswordButon = (e) => {
    setPasswordInput(e.target.value);
  };

  const [wrongData, setWrongData] = useState(false);

  // condition to login
  //let value = emailInput === '1' && passwordInput === '1' ? '/home' : '/';

  // const handleSubmitButton = () => {
  //   if (emailInput === '2' && passwordInput === '1') {
  //     setWrongData(false);
  //     value = '/home';
  //   } else {
  //     setWrongData(true);
  //     value = '/';
  //   }
  //   console.log(value);
  // };

  const errorMesage = 'Check login or email';

  return (
    <>
      <ContainerHeader>
        <Header>Login</Header>
        <Description>Login to play and using website!</Description>
        <div
          className={
            wrongData === true ? 'errorMessage showError' : 'errorMessage'
          }
        >
          {errorMesage}
        </div>
      </ContainerHeader>
      <Form action="">
        <PrefixInput>Email</PrefixInput>
        <ContainerInput>
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={formData.userName}
            onChange={(e) => setFormData({userName: e.target.value})}
          />
        </ContainerInput>

        <PrefixInput>Password</PrefixInput>
        <ContainerInput>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={(e) => setFormData({ password: e.target.value })}
          />
          <ButtonForShowPassword type="button" onClick={handleShowPassword}>
            <Img src={showPassword} alt="Show password" />
          </ButtonForShowPassword>
        </ContainerInput>
        <LoginButton onClick={handleLoginButton}>Login</LoginButton>

        {/* <Link to={linkTo} className="buttonLink">
          <InputSubmit
            type="button"
            value="Login"
            onClick={handleLoginButton}
          />
        </Link> */}
      </Form>
      <Option>Or login with</Option>

      <ContainerIcons>
        {icons.map(({ src, alt }, index) => (
          <Icon>
            <IconImage src={src} alt={alt} key={index} />
          </Icon>
        ))}
      </ContainerIcons>
      <ContainerRegisterLink>
        Don't have an account?{' '}
        <Link to={'/sign-up'}>
          <RegisterLink>Register</RegisterLink>
        </Link>
      </ContainerRegisterLink>
    </>
  );
}

export default LoginPage;

const ContainerIcons = styled.div`
  width: 80vw;
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
`;

const Icon = styled.button`
  border: 1px solid #747c92;
  width: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-radius: 30px;
  background: transparent;
`;

const IconImage = styled.img`
  height: 25px;
`;

const ContainerRegisterLink = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: center;
`;

const RegisterLink = styled.div`
  font-weight: 600;
  margin-left: 3px;
  color: black;
  text-decoration: none;
`;

const ContainerHeader = styled.div`
  text-align: left;
  width: 100%;
  margin-bottom: 10px;
`;

const LoginButton = styled.button`
  border-radius: 10px;
  padding: 10px;
`;
