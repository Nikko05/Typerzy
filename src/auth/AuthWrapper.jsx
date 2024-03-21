import React from 'react';
import { createContext, useContext, useState } from 'react';
import LoginPage from '../components/LoginPage';

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext)

export const AuthWrapper = () => {
  const [user, setUser] = useState({name : '', isAuthenticated: false});
  
  const login = (userName, password) => {
    return new Promise(({resolve, reject}) => {
      if(password === 'password' ) {
        setUser({name: userName, isAuthenticated: true});
        resolve('Success!');
      } else {
        reject('Incorrect password!')
      }
    })
  }

  const logout = () => {
    setUser({...user, isAuthenticated: false})
  }

  return(
    <AuthContext.Provider value={{user, logout, login}}>
      <>
        <LoginPage />
      </>
    </AuthContext.Provider>
  ); 
};