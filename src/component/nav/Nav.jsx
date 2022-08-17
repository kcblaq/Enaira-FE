import React, {useState} from 'react'
import { AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import logom from "../../../src/logom.svg"
import {Link} from "react-router-dom"

export default function Nav() {
    const [show, setShow] = useState(false)

  return (
    <div className='flex justify-between w-full items-center p-4 '>
    <Link to="/">
    <img src={logom} alt='the logo' />
    </Link>
   <div className='relative'>
   { show ? < AiOutlineClose className="cursor-pointer" onClick={() => setShow(false)}/> 
   : <AiOutlineMenu className="cursor-pointer" onClick={() => setShow(true)} /> }
   
   {show && <div className='absolute flex flex-col w-[200px] bg-white z-50 h-[200px] p-4 border-[#E3F6D7] right-0 border-2 rounded-lg'>
    <Link to='/about'> About</Link>
    <Link to='/product'> Product</Link>
    <Link to='/blog'> Blog</Link>
    <Link to='/contact'> Contact</Link>
    <Link to='/'> Home</Link>
    <div className='flex justify-between mt-2'>
    <Link to='/login'> <button className='py-2 px-4 border-2 rounded-lg border-[#E3F6D7]'> Login</button> </Link>
    <Link to='/register'> <button className='py-2 px-4 border-2 rounded-lg bg-[#327528] text-white'> Register</button> </Link>
    
       </div>
   </div> }
   </div>
</div>
  )
}
