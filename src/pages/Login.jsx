
import React, { useState } from 'react';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/FooterDiv/Footer';
import { Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your login logic here, like sending a request to your backend
    // with email, username, and password for authentication.
    console.log('Email:', email);
    console.log('Username:', username);
    console.log('Password:', password);
    // Resetting the form fields
    setEmail('');
    setUsername('');
    setPassword('');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <form onSubmit={handleSubmit} className="flex flex-col items-center mt-8">
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} className="border border-gray-300 rounded-md px-4 py-2 w-64 focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-1">Username:</label>
          <input type="text" id="username" value={username} onChange={handleUsernameChange} className="border border-gray-300 rounded-md px-4 py-2 w-64 focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} className="border border-gray-300 rounded-md px-4 py-2 w-64 focus:outline-none focus:border-blue-500" />
        </div>
        <li className=''>
            <Link to={'/Register'}>No Account?</Link>
            </li>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Login
        </button>
      </form>
      <Footer className="mt-auto" />
    </div>
  );
};

export default Login;
