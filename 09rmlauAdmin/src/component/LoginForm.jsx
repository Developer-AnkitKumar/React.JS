import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // To navigate post-login

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifyCode, setVerifyCode] = useState('');
  const [userData, setUserData] = useState(null);

  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    setUserData(storedData); // Retrieve registration data from local storage
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      userData &&
      email === userData.email &&
      password === userData.password &&
      verifyCode === userData.verifyCode
    ) {
      alert('Login Successful!');
      // Navigate to verification pass page
      navigate('/verify');
    } else {
      alert('Invalid Email, Password, or Verify Code!');
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Verify Code</label>
          <input
            type="text"
            value={verifyCode}
            onChange={(e) => setVerifyCode(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
