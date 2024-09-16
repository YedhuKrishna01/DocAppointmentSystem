import React from 'react'
import { Form } from  "antd"
function Register() {

  const onfinishHandler = (values) =>{
    console.log(values);
    
  }
  return (
    <div>
      <div className="form-container">
        <Form layout='vertical' onFinish={onfinishHandler}>grg</Form>
      </div>
    </div>
  )
}

export default Register
