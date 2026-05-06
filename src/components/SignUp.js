import React, {useState, useContext} from 'react'
import UserContext from '../context/users/UserContext';

export default function SignUp() {
  const context = useContext(UserContext);
  const {signup} = context;

  const [user, setUser] = useState({name: "", email: "", password: "", confirmPassword: ""});

  const onChange = (e) => {
    setUser({...user, [e.target.name]:e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password === user.confirmPassword) signup(user.name, user.email, user.password);
    console.log(user);
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="row g-3 align-items-center mb-3">
        <div className="col-md-2">
          <label htmlFor="name" className="col-form-label"> Full Name </label>
        </div>
        <div className="col-auto">
          <input type="text" className="form-control" id="name" name="name" aria-describedby="nameHelp" value={user.name} onChange={onChange} minLength={3} required />
        </div>
        <div className="col-auto">
          <span id="nameHelp" className="form-text"> Must be more than 3 characters long. </span>
        </div>
      </div>
      <div className="row g-3 align-items-center mb-3">
        <div className="col-md-2">
          <label htmlFor="email" className="col-form-label"> Email address </label>
        </div>
        <div className="col-auto">
          <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" value={user.email} onChange={onChange} required />
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
          <input type="password" className="form-control" id="password" name="password" aria-describedby="passwordHelp" value={user.password} onChange={onChange} minLength={5} required />
        </div>
        <div className="col-auto">
          <span id="passwordHelp" className="form-text"> Must be more than 5 characters long. </span>
        </div>
      </div>
      <div className="row g-3 align-items-center mb-3">
        <div className="col-md-2">
          <label htmlFor="password" className="col-form-label"> Confirm Password </label>
        </div>
        <div className="col-auto">
          <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" aria-describedby="confirmPasswordHelp" value={user.confirmPassword} onChange={onChange} minLength={5} required />
        </div>
        <div className="col-auto">
          <span id="confirmPasswordHelp" className="form-text"> Must be same as password. </span>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-2 offset-md-3">
          <button disabled={(user.name.length < 3) || (user.password.length < 5) || (user.confirmPassword !== user.password)} type="submit" className="btn btn-primary"> Signup </button>
        </div>
      </div>
    </form>
    </>
  );
}