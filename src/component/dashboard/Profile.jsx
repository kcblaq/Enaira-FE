import React from 'react'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineRight} from "react-icons/ai"

export default function Profile() {
    const notifi = () => toast('Successfull Login')
    let name = 'Mandela Ojoh'
  return (
    <div className='flex flex-col min-h-screen w-full items-center m-4'>
        <div className=' flex flex-col items-center'>
            <img src='https://randomuser.me/api/portraits/women/80.jpg' alt='the user' className=' rounded-full text-center border-2' />
            <h1 className='text-bold text-xl'> {name}</h1>
        </div>
        <div className="shadow-lg rounded-lg p-4 flex flex-col items-center w-full gap-4 bg-gray-100 mt-4">
            <h4> General</h4>
            <div className='flex justify-between items-center w-full bg-purple-500 text-white rounded-lg p-2'>
                <h4> Personal Detail </h4>
                <AiOutlineRight />
            </div>
            <div className='flex justify-between items-center w-full bg-purple-500 text-white rounded-lg p-2'>
                <h4> BVN</h4>
                <AiOutlineRight />
            </div>
            <div className='flex justify-between items-center w-full bg-purple-500 text-white rounded-lg p-2'>
                <h4> Settings</h4>
                <AiOutlineRight />
            </div>
            <div className='flex justify-between items-center w-full bg-purple-500 text-white rounded-lg p-2'>
                <h4> Refer a friend</h4>
                <AiOutlineRight />
            </div>
            <div className='flex justify-between items-center w-full bg-purple-500 text-white rounded-lg p-2'>
                <h4> Help and Support</h4>
                <AiOutlineRight />
            </div>
        </div>

        <div className="shadow-lg rounded-lg p-4 flex flex-col items-center w-full gap-4 bg-gray-100 mt-4">
            <h4> Security</h4>
            <div className='flex justify-between items-center w-full bg-purple-500 text-white rounded-lg p-2'>
                <h4> Change Password </h4>
                <AiOutlineRight />
            </div>
            <div className='flex justify-between items-center w-full bg-purple-500 text-white rounded-lg p-2'>
                <h4> Fingerprint Authentication</h4>
                <AiOutlineRight />
            </div>
            <div className='flex justify-between items-center w-full bg-purple-500 text-white rounded-lg p-2'>
                <h4> 2FA</h4>
                <AiOutlineRight />
            </div>
        </div>

        {/* <ToastContainer/>
        <button type="submit" className='px-8 py-2 bg-purple-500 rounded-lg text-white mt-6' onClick={notifi}> Submit</button> */}
    </div>
  )
}
