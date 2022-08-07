import React from 'react'
import { AiOutlineMenu} from "react-icons/ai"
import {FiSend} from "react-icons/fi"
import { GrAdd} from "react-icons/gr"
import {IoIosShareAlt} from "react-icons/io"
import {FcAutomatic} from 'react-icons/fc'

export default function Dashboard() {
    let amt = '105,000'
  return (
    <div className='flex flex-col gap-3 w-full '>
        <div className='p-4 bg-gray-200 rounded-b-3xl w-full'>
       <div className='flex justify-between w-full items-center'>
       <AiOutlineMenu />
        <img src='https://randomuser.me/api/portraits/women/80.jpg' alt='the user' className=' rounded-full w-1/12 h-1/12 text-center border-2' />
       </div>
        <div className='mt-16 flex flex-col items-center gap-3'>
        <h2 >Current Balance</h2>
        <h2 className='font-bold text-3xl'><span className='text-sm'> NGN</span> {amt}</h2>
        </div>
    </div>
    <div className='flex justify-between p-4'>
        <div className='flex flex-col items-center'>
            <FiSend className='rounded-full border-2 border-purple-500 text-purple-500 h-full text-3xl cursor-pointer  p-2' onClick={()=> alert("Helo")} />
            <h3 className='font-bold'> Send</h3>
        </div>
        <div className='flex flex-col items-center'>
            <GrAdd className='rounded-full border-2 border-purple-500 text-purple-500 h-full text-3xl cursor-pointer  p-2' onClick={()=> alert("Helo")} />
            <h3 className='font-bold'> Add</h3>
        </div>
        <div className='flex flex-col items-center'>
            <IoIosShareAlt className='rounded-full border-2 border-purple-500 text-purple-500 text-3xl cursor-pointer  p-2' onClick={()=> alert("Helo")} />
            <h3 className='font-bold'> P2P</h3>
        </div>
        <div className='flex flex-col items-center'>
            <FcAutomatic className='rounded-full border-2 border-purple-500 text-purple-500 text-3xl  cursor-pointer p-2' onClick={()=> alert("Helo")} />
            <h3 className='font-bold'> Automated</h3>
        </div>
    </div>
    <div className='rounded-lg p-4 border-2 border-purple-500 m-2'>
        <div className='flex justify-between'>
        <h2 className='font-bold'> Transactions </h2>
        <h2 className='font-bold'> See All</h2>
        </div>
        <h2 className='my-4'> Today</h2>
        
        <div className='flex justify-between w-full'>
        <div className='flex items-center w-1/3 md:gap-2' > 
        <img src='https://randomuser.me/api/portraits/women/80.jpg' alt='the user' className=' rounded-full w-4/12 h-1/12 text-center border-2' />
        <p className='font-bold text-sm md:text-lg'>Fred Maximus </p>
        </div>
        <div><p className=''> -25,000 </p></div>
        <div> <p className=''> 12:05</p></div>
        </div>
        <div className='flex justify-between w-full'>
        <div className='flex items-center w-1/3 md:gap-2' > 
        <img src='https://randomuser.me/api/portraits/women/80.jpg' alt='the user' className=' rounded-full w-4/12 h-1/12 text-center border-2' />
        <p className='font-bold text-sm md:text-lg'> Max Oyi </p>
        </div>
        <div><p className=''> 5,000 </p></div>
        <div> <p className=''> 15:25</p></div>
        </div>
        <div className='flex justify-between w-full'>
        <div className='flex items-center w-1/3 md:gap-2' > 
        <img src='https://randomuser.me/api/portraits/women/80.jpg' alt='the user' className=' rounded-full w-4/12 h-1/12 text-center border-2' />
        <p className='font-bold text-sm md:text-lg'> Lanre Kuyi </p>
        </div>
        <div><p className=''> 500 </p></div>
        <div> <p className=''> 19:05</p></div>
        </div>
    </div>
    <div className='rounded-lg p-4 border-2 border-purple-500 m-2 drop-shadow-2xl'> 
    <h2 className='font-bold'> Withdrawals </h2>
    <h1 className='font-bold text-lg mt-8 text-center'> <span className='text-sm'>NGN</span> 23,200  <span className='font-thin'> on last week </span></h1>
    </div>
    </div>
  )
}
