import React from 'react'
import { Formik } from "formik"
import * as yup from 'yup';
import {Link, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const validate = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
})
export default function Login() {
    const navigate = useNavigate()
    const notify = ()=> toast('Logged in')
  return (
<div className='w-full p-4'>
{/* <div className='flex justify-between w-full text-2xl text-purple-500 mt-2'>
                <Link to="/"> <AiOutlineLogout /></Link>
                <AiOutlineMenu />
            </div> */}
            <h2 className='mt-10 font-bold text-center'> Login </h2>
            <Formik 
            initialValues= {{
                email:'',
                password:''
            }}
            validationSchema = {validate}
            onSubmit={(values) => navigate('/dashboard')}
            >
                {({ values, touched, handleSubmit, handleBlur, errors, handleChange}) => (
                    <form onSubmit={handleSubmit}>
                        
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
                            <label htmlFor='email'> Password </label>
                            <input
                                id='password'
                                name='password'
                                type='password'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                className=' border-2 rounded-lg w-full p-2'
                            />
                            {errors.password && touched.password ? <div className='text-red-500'> {errors.password}</div> : null}
                        </div>
                        <button type="submit" className='px-8 py-2 bg-purple-500 rounded-lg text-white mt-6'> Submit</button>
                    </form>
  )}

            </Formik>
</div>
   
  )
}
