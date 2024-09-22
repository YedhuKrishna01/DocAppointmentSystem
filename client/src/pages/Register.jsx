import React from 'react'
import { Form, Input } from  "antd"
import {Link, useNavigate} from 'react-router-dom'
import "../styles/Register.css"

function Register() {

  const navigate = useNavigate()

  //form handler
  const onfinishHandler = (values) =>{
    console.log(values);
    
  }
  return (
    <div>
      <div className="flex items-center justify-center h-[100vh]">
        <Form className='p-10 w-80 border-[1px] rounded-lg' layout='vertical' onFinish={onfinishHandler}>
          <div className="text-center text-xl font-semibold text-green-700">Register Form</div>
          <Form.Item label="Name" name="name" className='mt-4'>
            <Input type='text'required/>
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type='email'required/>
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type='password'required/>
          </Form.Item>
          <Link to="/login" className='text-blue-500'>Already have an account? Login</Link>
          <button className='mt-2 w-20 font-medium bg-green-700 px-4 py-2 rounded-md text-white' type='submit'>Register</button>
        </Form>
      </div>
    </div>
  )
}

export default Register
