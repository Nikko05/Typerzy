import React, { useState } from 'react';
import showPassword from '../assets/show-password.svg';
import backIcon from '../assets/backIocn.svg'
import { Form } from './FormStyles';
import { ContainerInput, Input, InputSubmit, Img } from './InputStyles';
import { Header, Description, Option, PrefixInput } from './DescriptionsStyles';
import { styled } from 'styled-components';

const Button = styled.button`
  border: none;
  background: transparent;
  outline: none;
`;

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
`

const BackButton = styled.img`
  height: 22px;
  opacity: .8;
`

interface loginPage {
  setLoginPage: React.Dispatch<React.SetStateAction<boolean>>;
}

function RegisterPage({ setLoginPage }: loginPage) {
  const [inputsObject, setInputsObjects] = useState([
    {
      label: 'Username',
      type: 'text',
      name: 'username',
      placeholder: 'Enter username',
    },
    {
      label: 'Email',
      type: 'email',
      name: 'email',
      placeholder: 'Enter your email',
    },
    {
      label: 'Password',
      type: 'password',
      name: 'password',
      placeholder: 'Enter password',
      src: showPassword,
    },
    {
      label: 'Confirm password',
      type: 'password',
      name: 'password',
      placeholder: 'Confirm password',
      src: showPassword,
    },
  ]);

  const handleShowPassword = (index: number) => {
    const changedInoutsObject = [...inputsObject];
    changedInoutsObject[index].type =
      changedInoutsObject[index].type === 'password' ? 'text' : 'password';
    setInputsObjects(changedInoutsObject);
  };

  return (
    <>
      <BackPage onClick={() => setLoginPage(true)}><BackButton src={backIcon} alt="Back icon" /></BackPage>
      <Form action="">
        {inputsObject.map(({ label, type, name, placeholder, src }, index) => (
          <>
            <PrefixInput>{label}</PrefixInput>
            <ContainerInput>
              <Input
                type={type}
                name={name}
                placeholder={placeholder}
                key={index}
              ></Input>
              {src ? (
                <Button type="button" onClick={() => handleShowPassword(index)}>
                  <Img src={src} alt="Show password" />
                </Button>
              ) : (
                ''
              )}
            </ContainerInput>
          </>
        ))}
        <InputSubmit type="submit" name="submit" value="Register"></InputSubmit>
      </Form>
    </>
  );
}

export default RegisterPage;
