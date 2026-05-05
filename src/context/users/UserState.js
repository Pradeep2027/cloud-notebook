import React, { useState } from 'react'
import UserContext from "./UserContext";

export default function UserState(props)    {
  const host = "http://localhost:5000";

  const [authToken, setAuthToken] = useState("");

  const [user, setUser] = useState({name: "", email: ""});

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
    // setUser({})
    // setAuthToken(newUser.au)
  }
  return (
      <UserContext.Provider value={{authToken, user, setUser, setAuthToken, signup}}>
        {props.children}
      </UserContext.Provider>
    )
}