import React, { useContext, useState } from 'react';
import { UserContext } from './App';
import Mystore from './Mystore';

export default function Loginformnew() {
  const { flag, setFlag } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const users = [
    { username: 'john', password: 'john123'}

  ];

  const handleLogin = () => {
    const user = users.find((u) => u.username === username);

    if (user && user.password === password) {
      setFlag(2);
    } else {
      
      setError('Invalid username or password');
    }
  };

  const handleCreateAccount = () => {
    setFlag(1);
  };

  return (
    <>
      <div>Login</div>
      <input
        type='text'
        placeholder='Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <br></br>
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <br></br>
      <button onClick={handleLogin}>Login</button>
      

      {error && <p style={{ color: 'red' }}>{error}</p>}

    
      {flag === 1 && <Mystore />}
    </>
  );
}
