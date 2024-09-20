import React from 'react'
import { Form, Input } from  "antd"
import {Link, useNavigate} from 'react-router-dom'
import "../styles/Register.css"

function Login() {

  const navigate = useNavigate()

  //form handler
  const onfinishHandler = (values) =>{
    console.log(values);
    
  }
  return (
    <div>
      <div className="flex items-center justify-center h-[100vh]">
        <Form className='p-10 w-80 border-[1px] rounded-lg hover:border-green-200' layout='vertical' onFinish={onfinishHandler}>
          <div className="text-center text-xl font-semibold text-green-700">Login Form</div>
          <Form.Item label="Email" name="email" className='mt-4'>
            <Input type='email'required/>
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type='password'required/>
          </Form.Item>
          <Link to="/login" className='text-blue-500'>Already have an account? Login</Link>
          <button className='mt-2 bg-green-700 px-4 py-2 rounded-md text-white' type='submit'>Register</button>
        </Form>
      </div>
    </div>
  )
}

export default Login
