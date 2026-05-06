import React from 'react'
import UserContext from "./UserContext";
import { useNavigate } from 'react-router-dom';

export default function UserState(props)    {
  const host = "http://localhost:5000";

  let navigate = useNavigate();

  const signup = async (name, email, password) => {
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body : JSON.stringify({name, email, password})
    });
    const newUser = await response.json()
    console.log(newUser);
  }

  const login = async (email, password) => {
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body : JSON.stringify({email, password})
    });
    const json = await response.json()
    if (json.success) {
      localStorage.setItem('token', json.authToken);
      navigate("/");
    }
    else {
      alert(json.error);
    }
  }

  return (
      <UserContext.Provider value={{signup, login}}>
        {props.children}
      </UserContext.Provider>
    )
}