import React, { useState } from 'react';
import showPassword from '../assets/show-password.svg';
import backIcon from '../assets/backIocn.svg';
import { Form } from './FormStyles';
import {
  ContainerInput,
  Input,
  InputSubmit,
  Img,
  ButtonForShowPassword,
} from './smallComponents/InputStyles';
import { Header, Description, Option, PrefixInput } from './DescriptionsStyles';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

function RegisterPage() {
  const [user, setUser] = useState({
    login: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleShowPassword = (index: number) => {
    const passwordInputs = Array.from(
      document.querySelectorAll<HTMLInputElement>('.password')
    );
    passwordInputs[index].type =
      passwordInputs[index].type === 'password' ? 'text' : 'password';
  };

  return (
    <>
      <Link to={'/'}>
        <BackPage>
          <BackButton src={backIcon} alt="Back icon" />
        </BackPage>
      </Link>
      <Form action="">
        <PrefixInput>Username</PrefixInput>
        <ContainerInput>
          <Input
            type="text"
            name="login"
            placeholder="Enter your username"
            value={user.login}
            onChange={handleChange}
          ></Input>
        </ContainerInput>

        <PrefixInput>Email</PrefixInput>
        <ContainerInput>
          <Input
            type="text"
            name="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={handleChange}
          ></Input>
        </ContainerInput>

        <PrefixInput>Password</PrefixInput>
        <ContainerInput>
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            key={0}
            value={user.password}
            className="password"
            onChange={handleChange}
          ></Input>
          <ButtonForShowPassword
            type="button"
            onClick={() => handleShowPassword(0)}
          >
            <Img src={showPassword} alt="Show password" />
          </ButtonForShowPassword>
        </ContainerInput>

        <PrefixInput>Repeat password</PrefixInput>
        <ContainerInput>
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Repeat your password"
            key={1}
            className="password"
            value={user.confirmPassword}
            onChange={handleChange}
          ></Input>
          <ButtonForShowPassword
            type="button"
            onClick={() => handleShowPassword(1)}
          >
            <Img src={showPassword} alt="Show password" />
          </ButtonForShowPassword>
        </ContainerInput>

        <InputSubmit type="submit" name="submit" value="Register"></InputSubmit>
      </Form>
    </>
  );
}

export default RegisterPage;

const BackPage = styled.button`
  position: absolute;
  top: 30px;
  left: 10vw;
  width: 30px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
`;

const BackButton = styled.img`
  height: 22px;
  opacity: 0.8;
`;
