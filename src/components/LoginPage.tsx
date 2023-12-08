import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import facebookIcon from '../assets/facebook-icon.svg';
import googleIcon from '../assets/google-icon.svg';
import appleIcon from '../assets/apple-icon.svg';
import showPassword from '../assets/show-password.svg';
import { Form } from './FormStyles';
import { Link } from 'react-router-dom';
import {
  ContainerInput,
  Input,
  InputSubmit,
  Img,
  ButtonForShowPassword,
} from './smallComponents/InputStyles';
import { Header, Description, Option, PrefixInput } from './DescriptionsStyles';
import './css/LoginPage.scss';

function LoginPage() {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [emailInput, setEmailInput] = useState();
  const [passwordInput, setPasswordInput] = useState();

  const icons = [
    { src: facebookIcon, alt: 'Facebook icon' },
    { src: googleIcon, alt: 'Google Icon' },
    { src: appleIcon, alt: 'Apple icon' },
  ];

  const handleShowPassword = () => {
    const passwordInput = document.getElementById(
      'password'
    ) as HTMLInputElement | null;
    if (passwordInput) {
      passwordInput.type =
        passwordInput.type === 'password' ? 'text' : 'password';
    }
  };
  
  const onChangeEmailButton = (e: any) => {
    setEmailInput(e.target.value);
  };

  const onChangePasswordButon = (e: any) => {
    setPasswordInput(e.target.value);
  };

  const [wrongData, setWrongData] = useState(false);

  let value = emailInput === '1' && passwordInput === '1' ? '/home' : '/';

  const handleSubmitButton = () => {
    if (emailInput === '1' && passwordInput === '1') {
      setWrongData(false);
      value = '/home';
    } else {
      setWrongData(true);
      value = '/';
    }
    console.log(value);
  };

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
            value={emailInput}
            onChange={onChangeEmailButton}
          />
        </ContainerInput>

        <PrefixInput>Password</PrefixInput>
        <ContainerInput>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            value={passwordInput}
            onChange={onChangePasswordButon}
          />
          <ButtonForShowPassword type="button" onClick={handleShowPassword}>
            <Img src={showPassword} alt="Show password" />
          </ButtonForShowPassword>
        </ContainerInput>
        <Link to={value} className="buttonLink">
          <InputSubmit type="button" value="Login" />
        </Link>
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
