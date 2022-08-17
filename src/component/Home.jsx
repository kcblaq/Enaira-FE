import React from 'react'
import { Link } from "react-router-dom"
import pana from "../assets/pana.svg"
import rafiki from "../assets/rafiki.svg"
import bro from "../assets/bro.svg"
import amiko from "../assets/amico.svg"
import card from "../assets/Frame.svg"
import mcard from "../assets/mcard.svg"
import cuate from "../assets/cuate.svg"
import cash from "../assets/cash.svg"



export default function Home() {
    return (
        <div className='flex flex-col w-full '>
            <div className=' flex p-4 w-full justify-between'>
                <div className='flex flex-col'>
                    <h1 className='text-lg font-bold text-[#3C8C30]'> A better way to send money</h1>
                    <p className='mt-2'> Send and receive money online in minutes across African countries. </p>

                </div>
                <img src={pana} alt='Banner' />
            </div>
            <h1 className='text-center text-[#3C8C30] font-bold mt-6 '> Why choose Us</h1>
            <div className='rounded-lg p-4 bg-[#E3F6D7] flex mt-2 mx-2'>
                <img src={rafiki} alt='authentication' />
                <div className='flex flex-col justify-between'>
                <h2 className='font-bold text-[#3C8C30]'> We are safe</h2>
                <p> We make use of leading industry technology to protect your money</p>
                </div>
            </div>
            <div className='rounded-lg p-4 bg-[#E3F6D7] flex mt-2 mx-2'>
                <div className='flex flex-col justify-between'>
                <h2 className='font-bold text-[#3C8C30]'> We are fast</h2>
                <p> 90% of our transfers are ready within minutes</p>
                </div>
                <img src={bro} alt='authentication' />
            </div>

            <div className='rounded-lg p-2 bg-[#E3F6D7] flex mt-2 mx-2'>
                <img src={amiko} alt='authentication' />
                <div className='flex flex-col justify-between'>
                <h2 className='font-bold text-[#3C8C30]'> Top notch customer service</h2>
                <p> 90% of our transfers are ready within minutes</p>
                </div>
            </div>


            <div className='flex justify-center'>
                <button className='px-4 py-2 items-center rounded-lg border-2 border-[#3CB8C30] text-[#3CB8C30] w-1/2 my-8'>
                    Features
                </button>
            </div>
            <p className='text-center text-sm'>
                A dynamic e-wallet currency that enables you to exchange and enjoy Free transfer at the lowest cross
                border rates.
            </p>

            <div className=' bg-[#E3F6D7] p-4 py-10 my-4 flex flex-col items-center text-center'>
                <h1 className='font-bold mb-4 text-[#327528]'> Currency Diversity </h1>
                <p className='text-sm'>  Incorporation of other country’s currencies to facilitate bordeless
                    transaction.</p>
                <button className='px-4 py-2 items-center rounded-lg  text-[#181818] bg-white border-2 w-1/2 mt-6'>
                    Nigeria
                </button>
                <button className='px-4 py-2 items-center rounded-lg  text-[#181818] bg-white border-2 w-1/2 mt-6'>
                    Ghana
                </button>
                <button className='px-4 py-2 items-center rounded-lg  text-[#181818] bg-white border-2 w-1/2 mt-6'>
                    Kenya
                </button>
                
                <button className='px-4 py-2 items-center rounded-lg bg-[#327528] text-white border-2 w-1/2 mt-6'>
                    View all 
                </button>
            </div>

            <div className='flex flex-col items-center py-4 gap-4'>
                <h1 className='text-[#327528] font-bold'> Peer-to-Peer </h1>
                <p className='text-center'> You can send and request money by searching for another user’s name,
                     email or phone number and then filling out the amount you want to send or request.</p>
                <div className='rounded-lg bg-[#D0EFBC] m-auto'>
                    <img src={card} alt='the card' />

                </div>
            </div>


            <div className=' bg-[#E3F6D7] p-4 py-10 my-4 flex flex-col items-center text-center'>
                <h1 className='font-bold mb-4 text-[#327528]'> Virtual Card </h1>
                <p className='text-sm'>  Virtual card made available to enable easy online payment</p>
                <img src={mcard} alt='virtual card' />
                
            </div>

            <div className='rounded-lg p-4 bg-[#E3F6D7] flex mt-2 m-2'>
                <div className='flex flex-col justify-between '>
                <h2 className='font-bold text-[#3C8C30]'> Service payment with just a tap</h2>
                <p> Make instant services payment such as electricity, airtime recharge, insurance and donations</p>
                </div>
                <img src={cuate} alt='authentication' />
            </div>

            <div className='rounded-lg p-4 bg-[#E3F6D7] flex mt-2 m-2'>
                <img src={cash} alt='authentication' />
                <div className='flex flex-col justify-between'>
                <h2 className='font-bold text-[#3C8C30]'> Refer and Earn</h2>
                <p> Refer people to use our services and make money based on their transactions.
              </p>
                </div>
            </div>

            <div className='mt-12 flex justify-center'>
                <p> &copy; enaira 2022. All rights reserved</p>
            </div>
        </div>
    )
}
