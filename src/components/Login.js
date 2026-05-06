import React, {useState, useContext, useEffect} from 'react'
import UserContext from '../context/users/UserContext';

export default function Login() {
  const context = useContext(UserContext);
  const {login, authToken} = context;

  const [user, setUser] = useState({email: "rach@gmail.com", password: "test1234"});

  useEffect(() => {
    console.log("authToken is : " + authToken);
  }, [authToken]);

  const onChange = (e) => {
    setUser({...user, [e.target.name]:e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login(user.email, user.password);
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="row g-3 align-items-center mb-3">
        <div className="col-md-2">
          <label htmlFor="email" className="col-form-label"> Email address </label>
        </div>
        <div className="col-auto">
          <input type="email" className="form-control" value={user.email} id="email" name="email" aria-describedby="emailHelp" onChange={onChange} />
        </div>
        <div className="col-auto">
          <span id="emailHelp" className="form-text"> Must be a valid email. </span>
        </div>
      </div>
      <div className="row g-3 align-items-center mb-3">
        <div className="col-md-2">
          <label htmlFor="password" className="col-form-label"> Password </label>
        </div>
        <div className="col-auto">
          <input type="password" className="form-control" value={user.password} id="password" name="password" aria-describedby="passwordHelp" onChange={onChange} />
        </div>
        <div className="col-auto">
          <span id="passwordHelp" className="form-text"> Must be more than 5 characters long. </span>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-2 offset-md-3">
          <button type="submit" className="btn btn-primary"> Login </button>
        </div>
      </div>
    </form>
    </>
  )
}