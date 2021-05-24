import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function SignupForm(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
      event.preventDefault();
        const formData = { 
        name,
        email,
        password
        
      }
      console.log(formData);

    fetch(`http://localhost:3000/users`, { 
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
       Body: JSON.stringify(formData)
      .then(response => response.json)
      .then(response => console.log(response))
    }) 

      }
      return (

        <form onSubmit={handleSubmit}>
        <h1>Create An Account</h1>

          <label htmlFor="Name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) =>setName(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input type="submit" value="Sign Up" />
        </form>
      );
}

export default SignupForm;