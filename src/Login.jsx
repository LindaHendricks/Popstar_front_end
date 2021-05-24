import React, { useState } from "react";
import "./Login.scss";
import { Link,useHistory } from "react-router-dom";

const url = `http://localhost:3000/login`

const Login = ({setCurrentUser}) => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value});
      console.log(e.target.value)
  };
    const handleSubmit = (e) => {
        e.preventDefault()
      console.log("click")
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      })
        .then(response => response.json())
        .then(user =>
          setCurrentUser(user)
        )
        history.push("/popContainer")
    }
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://www.kindpng.com/picc/m/238-2380777_michael-jackson-billie-jean-silhouette-michael-jackson-logo.png"
          alt=""
          className="login__image"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form onSubmit={handleSubmit}>
          <h5>E-mail</h5>
          <input name ="email" value={formData.email} onChange={handleChange} type="text" />
          <h5>Password</h5>
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
          />
          <button className="login__signInButton">Sign In</button>
        </form>

        <button className="login__registerButton">Become A PopStar</button>
      </div>
    </div>
  );
};

export default Login;
