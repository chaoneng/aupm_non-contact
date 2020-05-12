import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import './login.css'

export default class Login extends Component {

    handleSubmit = (values ) =>{
		console.log('Success:', values.acc);
		console.log('Success:', values.pwd);
		this.props.history.push('/info')
	}

    render() {

    
        return (
            <div className='login'>
                <div className='login-content'>
                    <h2>登入</h2>
                    <Form onFinish={this.handleSubmit} className="login-form">
				        <Form.Item
							name="acc"
							rules={[{ required: true, message: '帳號必須輸入!' }]}
						>
							<Input
								placeholder="帳號"
							/>
				        </Form.Item>
						<Form.Item
							name="pwd"
							rules={[{ required: true, message: '密碼必須輸入!' }]}
						>
							<Input
								type="password"
								placeholder="密碼"
							/>		          
				        </Form.Item>
				        <Form.Item>
				        	<Button htmlType="submit" className="login-form-button">
					        	登入
					        </Button>
				        </Form.Item>
			        </Form>
                </div>
            </div>
        )
    }
}
