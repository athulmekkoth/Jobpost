import React from 'react';

const Page = () => {
  return (
    <div className='bg-green-500 w-screen h-screen flex justify-center items-center mx-auto'>
    <div>
    <div className='   w-80 mx-auto'>
       <label className='text-white'>Email</label>
       <input className='rounded-lg w-80 mx-auto' type="text" />
       <label>Password</label>
       <input className='rounded-lg w-80 mx-auto' type="text" />
     </div>
    </div>
    </div>
  );
};

export default Page;
