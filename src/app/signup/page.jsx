"use client"
import React, { useState } from 'react';

import Button from '../Components/Button';
import axios from 'axios';
import Link from 'next/link';

const Page = () => {
  const[user,setUser]=useState({
    email:"",
    password:"",
    username:""
  })
  const onSingup=()=>{
    const response=axios.post()

  }
  return (
    <div className='bg-green-500 w-screen h-screen flex justify-center items-center mx-auto'>
    <div>
    <div className='   w-80 mx-auto'>
    <label className='text-white'>Name</label>
       <input className='rounded-lg w-80 mx-auto'  value={user.username} onChange={(e)=>{setUser({...user,username:e.target.value})}} type="text" />
       <label className='text-white'>Email</label>
       <input value={user.email} onChange={(e)=>{setUser({...user,email:e.target.value})}} className='rounded-lg w-80 mx-auto' type="text" />
       <label>Password</label>
       <input value={user.password} onChange={(e)=>{setUser({...user,password:e.target.value})}} className='rounded-lg w-80 mx-auto' type="text" />
     </div>
     <Button onClick={onSingup} name={"Sighnup"} color={"bg-blue-500"} />
    </div>
    <Link href="/login" >Login</Link>
    </div>
  );
};

export default Page;
