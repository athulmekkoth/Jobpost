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
    <div  className='h-52 lg:h-28 bg-dblue'>
      <div className=" w-full text-white">
        <div className='pt-5'>
          <div className='flex justify-between mx-8'>
         
            <div className=''>
              <Image className='lg:hidden' onClick={() => { setClick(!click) }} src={click ? "/menu.png" : "/close.png"} alt="Image" width={30} height={30} />

              <ul className={`lg:flex gap-6 flex-row text-2xl ${click ? 'hidden' : 'text-2xl mt-5 block font-extralight underline-offset-4 transition ease-in-out delay-550'}`}>
                <li className='li'><Link href="/">Home</Link></li>
                <li className='li'><Link href="/Create">Create</Link></li>
                <li className='li'><Link href="/Pricing">Pricing</Link></li>
                <li className='li'><Link href="/About">FAQ</Link></li>
              </ul>
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
