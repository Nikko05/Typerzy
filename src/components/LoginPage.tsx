/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import styled from 'styled-components';
import facebookIcon from '../assets/facebook-icon.svg';
import googleIcon from '../assets/google-icon.svg';
import appleIcon from '../assets/apple-icon.svg';
import showPassword from '../assets/show-password.svg';
import { Form } from './FormStyles';
import { ContainerInput, Input, InputSubmit, Img } from './InputStyles';
import { Header, Description, Option, PrefixInput } from './DescriptionsStyles';

const ContainerIcons = styled.div`
  width: 80vw;
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
`;

const Icon = styled.button`
  border: 1px solid #a9a9a9d4;
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

interface loginPage {
  setLoginPage: React.Dispatch<React.SetStateAction<boolean>>;
}

function LoginPage({ setLoginPage }: loginPage) {
  const icons = [
    { src: facebookIcon, alt: 'Facebook icon' },
    { src: googleIcon, alt: 'Google Icon' },
    { src: appleIcon, alt: 'Apple icon' },
  ];

  return (
    <>
      <Header>Login</Header>
      <Description>Login to play and using website!</Description>
      <Form action="">
        <PrefixInput>Email</PrefixInput>
        <ContainerInput>
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
        </ContainerInput>

        <PrefixInput>Password</PrefixInput>
        <ContainerInput>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
          />
          <Img src={showPassword} alt="Show password" />
        </ContainerInput>
        <InputSubmit type="submit" value="Login" />
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
        <RegisterLink onClick={() => setLoginPage(false)}>Register</RegisterLink>
      </ContainerRegisterLink>
    </>
  );
}

export default LoginPage;
