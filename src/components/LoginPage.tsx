/* eslint-disable array-callback-return */
import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import facebookIcon from '../assets/facebook-icon.svg';
import googleIcon from '../assets/google-icon.svg';
import appleIcon from '../assets/apple-icon.svg';
import showPassword from '../assets/show-password.svg';
import { Form } from './FormStyles';
import {
  ContainerInput,
  Input,
  InputSubmit,
  Img,
  ButtonForShowPassword,
} from './componentsHomePage/InputStyles';
import { Header, Description, Option, PrefixInput } from './DescriptionsStyles';
import { log } from 'console';
import HomePage from './HomePage';
import './css/LoginPage.scss';

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
`;

const ContainerHeader = styled.div`
  text-align: left;
  width: 100%;
  margin-bottom: 10px;
`;

interface loginPage {
  setRegisterPage: React.Dispatch<React.SetStateAction<boolean>>;
  setLogedUser: React.Dispatch<React.SetStateAction<boolean>>;
  logedUser: boolean;
}

function LoginPage({ setRegisterPage, setLogedUser, logedUser }: loginPage) {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

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

  const onChangeEmailButton = () => {
    const emailInputValue = emailRef.current?.value;
  };

  const onChangePasswordButon = () => {
    const passwordInputValue = passwordRef.current?.value;
  };

  const [wrongData, setWrongData] = useState(false);

  const handleSubmitButton = () => {
    const emailInputValue = emailRef.current?.value;
    const passwordInputValue = passwordRef.current?.value;
    if (passwordInputValue === '1' && emailInputValue === '1') {
      setLogedUser(true);
      setWrongData(false);
    } else {
      setWrongData(true);
      setLogedUser(false);
    }
  };

  const errorMesage = 'Check login or email';

  return (
    <>
      {logedUser === false ? (
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
                ref={emailRef}
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
                ref={passwordRef}
                onChange={onChangePasswordButon}
              />
              <ButtonForShowPassword type="button" onClick={handleShowPassword}>
                <Img src={showPassword} alt="Show password" />
              </ButtonForShowPassword>
            </ContainerInput>
            <InputSubmit
              type="button"
              value="Login"
              onClick={handleSubmitButton}
            />
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
            <RegisterLink onClick={() => setRegisterPage(false)}>
              Register
            </RegisterLink>
          </ContainerRegisterLink>
        </>
      ) : (
        <HomePage logedUser={logedUser} setLogedUser={setLogedUser} setRegisterPage={setRegisterPage}/>
      )}
    </>
  );
}

export default LoginPage;
