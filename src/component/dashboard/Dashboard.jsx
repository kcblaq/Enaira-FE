import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiSend , FiUsers, FiRefreshCcw} from 'react-icons/fi';
import { GrAdd } from 'react-icons/gr';
import { IoIosShareAlt } from 'react-icons/io';
import { FcAutomatic } from 'react-icons/fc';
import { GoArrowUp, GoArrowDown } from 'react-icons/go';
import {TbArrowUpCircle, TbArrowDownCircle} from "react-icons/tb"
import {FaUserAlt} from "react-icons/fa"


export default function Dashboard() {
	const data = [
		{
		name:'Fred maximus',
		amount: '-25,000',
		time:'12:05',
		image: "https://randomuser.me/api/portraits/women/80.jpg"
	},
	{
		name:'Theresa Ugwu',
		amount: '200,000',
		time:'12:05',
		image: "https://randomuser.me/api/portraits/women/80.jpg"
	},
	{
		name:'Obusi Utombosi',
		amount: '-3,000',
		time:'15:47',
		image: "https://randomuser.me/api/portraits/women/80.jpg"
	},
	{
		name:'Linda Jones',
		amount: '-6',
		time:'19:00',
		image: "https://randomuser.me/api/portraits/women/80.jpg"
	},
	
]
	let amt = '105,000';
	return (
		<div className="flex flex-col gap-3 w-full ">
			<div className="p-4 bg-[#CFEFBB] rounded-b-3xl w-full">
				<div className="flex justify-end w-full items-center">
					<img
						src="https://randomuser.me/api/portraits/women/80.jpg"
						alt="the user"
						className=" rounded-full w-1/12 h-1/12 text-center border-2"
					/>
				</div>
				<div className=" py-8 flex flex-col items-center gap-3">
					<h2>Current Balance</h2>
					<h2 className="font-bold text-3xl">
						<span className="text-sm"> NGN</span> {amt}
					</h2>
                    <div className='flex text-black gap-8'>
                        <div className='flex flex-col items-center'>
                        <TbArrowUpCircle  className='text-4xl  cursor-pointer'/>
                        <h6 className='font-bold'> Send</h6>
                        </div>
                        <div className='flex flex-col items-center'>
                        <TbArrowDownCircle  className='text-4xl cursor-pointer '/>
                        <h6 className='font-bold'> Recieve </h6>
                        </div>
                    </div>
				</div>
			</div>
			<div className="flex justify-center gap-6 p-4 my-4" >
				<div className="flex flex-col items-center w-full">
					<div className='rounded-full border-2 bg-[#D8E8D6] text-black h-full text-3xl cursor-pointer  p-4'>
                    <FiUsers
						className=""
						onClick={() => alert('Helo')}
					/>
                    </div>
					<h3 className="font-bold"> P2P</h3>
				</div>
                <div className="flex flex-col items-center w-full">
					<div className='rounded-full border-2 bg-[#D8E8D6] text-black h-full text-3xl cursor-pointer  p-4'>
                    <FiRefreshCcw
						className=""
						onClick={() => alert('Helo')}
					/>
                    </div>
					<h3 className="font-bold"> Automated</h3>
				</div>

                <div className="flex flex-col items-center w-full">
					<div className='rounded-full border-2 bg-[#D8E8D6] text-black h-full text-3xl cursor-pointer  p-4'>
                    <FaUserAlt
						className=""
						onClick={() => alert('Helo')}
					/>
                    </div>
					<h3 className="font-bold"> Merchant</h3>
				</div>

			</div>
			<div className="rounded-lg p-4 bg-[#D0EFBC] m-4">
				<div className="flex justify-between">
					<h2 className="font-bold"> Transactions </h2>
					<h2 className="font-bold"> See All</h2>
				</div>
				<h2 className="my-4 font-bold"> Today</h2>

				{
					data.map((item) => (
						<div className="flex justify-between w-full">
					<div className="flex items-center w-1/3 md:gap-2">
						<img
							src={item.image}
							alt={item.name}
							className=" rounded-full w-4/12 h-1/12 text-center border-2"
						/>
						<p className="font-bold text-xs md:text-lg"> {item.name}</p>
					</div>
					<div>
						<p className=""> {item.amount}</p>
					</div>
					<div>
						{' '}
						<p className="">{item.time} </p>
					</div>
				</div>
					))
				}
			</div>
			<div className="rounded-lg p-4 border-2 border-purple-500 m-2 drop-shadow-2xl">
				<h2 className="font-bold"> Withdrawals </h2>
				<h1 className="font-bold text-lg mt-8 text-center">
					{' '}
					<span className="text-sm">NGN</span> 23,200{' '}
					<span className="font-thin"> on last week </span>
				</h1>
			</div>
		</div>
	);
}
