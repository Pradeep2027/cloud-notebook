import UserContext from "./UserContext";

import React, { useState } from 'react'

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
      <UserContext.Provider value={{authToken, user}}>
        {props.children}
      </UserContext.Provider>
    )
}