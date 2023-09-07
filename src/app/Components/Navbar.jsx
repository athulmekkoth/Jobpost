"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Button from './Button';
import Link from 'next/link';

const Navbar = () => {

  const customStyle = {
    backgroundImage: "url('./nav.jpg')",
    
  };
  const [click, setClick] = useState(true);

  return (
    <div  className='lg:flex lg:justify-center lg:items-center h-52 lg:h-28 bg-dblue bg-white text-black border-b-2 border-gray-400 ... '>
      <div className=" w-full text-black">
        <div className='pt-5'>
          <div className='flex justify-between mx-8'>
         
            <div className=''>
              <Image className='lg:hidden' onClick={() => { setClick(!click) }} src={click ? "/menu.png" : "/close.png"} alt="Image" width={30} height={30} />

              <ul className={`lg:flex gap-6 flex-row text-xl  ${click ? 'hidden' : 'text-2xl mt-5 block font-extralight underline-offset-4 transition ease-in-out delay-550'}`}>
                <li className='li'><Link href="/">Jobs</Link></li>
                <li className='li'><Link href="/Create">Profile</Link></li>
                <li className='li'><Link href="/Pricing">Pricing</Link></li>
                <li className='li'><Link href="/About">About Us</Link></li>
              </ul>
            </div>
            <div className='text-2xl'>
              Magneto
            </div>
            <div>
              <Button name={"login"} color={"bg-blue-500"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
