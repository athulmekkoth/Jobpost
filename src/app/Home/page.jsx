import React from 'react'
import Image from 'next/image';
import { headers } from '../../../next.config';

import Smallpart from './Smallpart';
import  FirstPart  from './FirstPart';
const Home= () => {
 

  return (
    <div>
  <div className='flex flex-col justify-center items-center gap-7 mt-7'>
    <h1 className='text-2xl md:text-5xl font-extralight'>Looking For Remote Jobs</h1>
    <h1 className='text-2xl md:text-5xl font-extralight'>We got your Back!</h1>
      <Image className="mx-auto" src="/home.png" alt="home"  width={1000}  height={500}/>
 
  
  </div>
 <Smallpart />
 <FirstPart />
 </div>
    
  )
}

export default Home