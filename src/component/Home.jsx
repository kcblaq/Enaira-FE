import React from 'react'
import { AiOutlineMenu} from "react-icons/ai"
import {Link} from "react-router-dom"

export default function Home() {
  return (
    <div className='flex flex-col w-full p-4'>
       <div className='border-2 border-purple-500 rounded-lg p-4'>
       <div className='flex justify-between items-center '>
            <AiOutlineMenu />
            <Link to="/register">
            <button className='px-8 py-2 bg-purple-500 text-white rounded-lg '> Register</button>
            </Link>
        </div>
        <h1 className='mt-6 text-lg font-bold'> A better way to send money</h1>
        <p className='mt-6 left-2'> Send and receive money online in minutes across African countries. </p>
        <Link to="/login">
        <button className='px-8 py-2 bg-purple-500 text-white rounded-lg float-right mt-4 '> Login</button>
        </Link>
       </div>
       <h1 className='text-center font-bold mt-6'> Why choose Us</h1>
       <div className='border-2 border-purple-500 rounded-lg p-4'>
            <h2 className='font-bold'> We are fast</h2>
            <p> 90% of our transfers are ready within minutes</p>
        </div>
        <div className='border-2 border-purple-500 rounded-lg p-4 mt-6'>
            <h2 className='font-bold'> We are safe</h2>
            <p> We make use of leading industry technology to protect your money</p>
        </div>
        <div className='border-2 border-purple-500 rounded-lg p-4 mt-6'>
            <h2 className='font-bold'> Top notch customer service</h2>
            <p> our customer care representative are always available to help answer your questions and resolution of issues.</p>
        </div>
        <div className='flex justify-center'>
        <button className='px-4 py-2 items-center rounded-lg bg-purple-500 text-white w-1/2 mt-6'>
            Features
        </button>
        </div>
        <p className='text-center'>
        A dynamic e-wallet currency that enables you to exchange and enjoy Free transfer at the lowest cross
                 border rates.
        </p>
        <div className='border-2 border-purple-500 rounded-lg p-4 mt-6 flex flex-col items-center text-center'>
            <h1 className='font-bold mb-4'> Currency Diversity </h1>
            <p> Incorporation of other country’s currencies to facilitate bordeless
               transaction.</p>
        <button className='px-4 py-2 items-center rounded-lg bg-purple-500 text-white w-1/2 mt-6'>
            Nigeria
        </button>
        <button className='px-4 py-2 items-center rounded-lg bg-purple-500 text-white w-1/2 mt-6'>
            Ghana
        </button>
        <button className='px-4 py-2 items-center rounded-lg bg-purple-500 text-white w-1/2 mt-6'>
            Kenya
        </button>
        <button className='px-4 py-2 items-center rounded-lg border-purple-500 text-purple-500 border-2 w-1/2 mt-6'>
            View all 
        </button>
        </div>
        <div className='mt-12 flex justify-center'>
        <p> &copy; enaira 2022. All rights reserved</p>
        </div>
    </div>
  )
}
