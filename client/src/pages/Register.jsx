import React from 'react'
import { Form, Input } from  "antd"
import FormItem from 'antd/es/form/FormItem';
import "../styles/Register.css"

function Register() {

  const onfinishHandler = (values) =>{
    console.log(values);
    
  }
  return (
    <div>
      <div className="flex items-center justify-center h-[100vh]">
        <Form className='p-10 border-[1px] rounded-lg' layout='vertical' onFinish={onfinishHandler}>
          <h1>Register Form</h1>
          <FormItem label="Name" name="name">
            <Input type='text'required/>
          </FormItem>
          <FormItem label="Email" name="email">
            <Input type='email'required/>
          </FormItem>
          <FormItem label="Password" name="password">
            <Input type='password'required/>
          </FormItem>
          <button type='submit'>Register</button>
        </Form>
      </div>
    </div>
  )
}

export default Register
