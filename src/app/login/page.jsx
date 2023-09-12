"use client"
import React from 'react'
import { useState } from 'react';
import Button from '../Components/Button';
import Link from 'next/link';
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLogin = () => {
    // You should make an Axios POST request here to authenticate the user.
    
  };

  return (
    <div className='bg-green-500 w-screen h-screen flex justify-center items-center mx-auto'>
      <div>
        <div className='w-80 mx-auto'>
          <label className='text-white'>Email</label>
          <input
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className='rounded-lg w-80 mx-auto'
            type="text"
          />
          <label className='text-white'>Password</label>
          <input
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className='rounded-lg w-80 mx-auto'
            type="password" // Use type="password" for password fields
          />
        </div>
        <Button onClick={onLogin} name={"Login"} color={"bg-blue-500"} />
      </div>
      <Link href="/signup">Signup</Link> {/* Add a link to the signup page */}
    </div>
  );
};

export default Login