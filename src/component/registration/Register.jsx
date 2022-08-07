import React, {useState} from 'react'
import { Formik } from "formik"
import * as yup from 'yup';
import {Link } from "react-router-dom"
import { AiOutlineLogout, AiOutlineMenu, AiOutlineEyeInvisible,AiOutlineEye } from "react-icons/ai"

const validate = yup.object().shape({
    firstName: yup.string().required().min(3),
    lastName: yup.string().required(),
    email: yup.string().required().email(),
    country: yup.string().required(),
    phone: yup.number().required(),
    password: yup.string().required().min(7),
    confirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
})

export default function Register() {
    const [pass, setPass ] = useState('password')
    const [confirm, setConfirm ] = useState('password')
  return (
<div className='w-full p-4'>
<div className='flex justify-between w-full text-2xl text-purple-500 mt-2'>
                <Link to="/"> <AiOutlineLogout /></Link>
                <AiOutlineMenu />
            </div>
            <h2 className='mt-10 font-bold text-center'> Login </h2>
            <Formik 
            initialValues= {{
                firstName:'',
                lastName:'',
                email:'',
                phone:'',
                password:'',
            }}
            validationSchema = {validate}
            onSubmit={(values) => console.log(values)}
            >
                {({ values, touched, handleSubmit, handleBlur, errors, handleChange}) => (
                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-col mt-4'>
                            <label htmlFor='firstName'> First Name </label>
                            <input
                                id='firstName'
                                name='firstName'
                                type='text'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.firstName}
                                className=' border-2 rounded-lg w-full p-2'
                            />
                            {errors.firstName && touched.firstName ? <div className='text-red-500'> {errors.firstName}</div> : null}
                        </div>

                            <div className='flex flex-col mt-4'>
                            <label htmlFor='firstName' className='font-medium text-gray-900 dark:text-gray-300' > Last Name </label>
                            <input
                                id='lastName'
                                name='lastName'
                                type='text'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.lastName}
                                className=' border-2 rounded-lg w-full p-2'
                            />
                            {errors.lastName && touched.lastName ? <div className='text-red-500'> {errors.lastName}</div> : null}
                        </div>

                        <div className='flex flex-col mt-4'>
                            <label htmlFor='email'> Email </label>
                            <input
                                id='email'
                                name='email'
                                type='text'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                className=' border-2 rounded-lg w-full p-2'
                            />
                            {errors.email && touched.email ? <div className='text-red-500'> {errors.email}</div> : null}
                        </div>

                        <div className='flex flex-col mt-4'>
                            <label htmlFor='phone' className='font-medium text-gray-900 dark:text-gray-300'> Phone Number</label>
                            <input
                                id='phone'
                                name='phone'
                                type='text'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phone}
                                className=' border-2 rounded-lg w-full p-2'
                            />
                            {errors.phone && touched.phone ? <div className='text-red-500'> {errors.phone}</div> : null}
                        </div>

                        <div className='flex flex-col mt-4'>
                            <label htmlFor='country' className='font-medium text-gray-900 dark:text-gray-300'> Country</label>
                            <input
                                id='country'
                                name='country'
                                type='text'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.country}
                                className=' border-2 rounded-lg w-full p-2'
                            />
                            {errors.country && touched.country ? <div className='text-red-500'> {errors.country}</div> : null}
                        </div>

                        <label htmlFor="password" className="block text-sm mt-4 font-medium text-gray-900 dark:text-gray-300">Password</label>
                         <div className="relative mb-6 w-full">
                             <div className="flex absolute inset-y-0 right-6 items-center pl-3 ">

                                 {pass === 'text' && <AiOutlineEyeInvisible onClick={() => setPass('password')} className="cursor-pointer" />}
                                 {pass === 'password' && <AiOutlineEye onClick={() => setPass('text')} className="cursor-pointer" />}

                             </div>
                           <input type={pass}
                                id="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                className="p-2 border-2 bg-white w-full rounded-lg" />

                        </div>
                        {errors.password && touched.password ? <div className='text-red-500'> {errors.password}</div> : null}
                         <label htmlFor="confirm" className="block text-sm mt-4 font-medium text-gray-900 dark:text-gray-300">Confirm Password</label>
                         <div className="relative mb-6 w-full">
                             <div className="flex absolute inset-y-0 right-6 items-center pl-3 ">

                                 {confirm === 'text' && <AiOutlineEyeInvisible onClick={() => setConfirm('password')} className="cursor-pointer" />}
                                 {confirm === 'password' && <AiOutlineEye onClick={() => setConfirm('text')} className="cursor-pointer" />}

                             </div>
                             <input type={confirm}
                                id="confirm"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.confirm}
                                className="p-2 border-2 bg-white w-full rounded-lg" />
                        </div>
                            {errors.confirm && touched.confirm ? <div className='text-red-500'> {errors.confirm}</div> : null}

                        <button type="submit" className='px-8 py-2 bg-purple-500 rounded-lg text-white mt-6'> Submit</button>
                    </form>
  )}

            </Formik>
</div>
   
  )
}
