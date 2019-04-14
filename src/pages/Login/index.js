import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import './index.less';
import logger from "@/utils/logger";

class Login extends React.Component {
  handleSubmit = (e) => {
    const { form } = this.props;
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        logger.log('Received values of form: ', values);
        const { history } = this.props;
        history.push('/home');
      }
    });
  }

  register = () => {
    const { history } = this.props;
    history.push('/register');
  }

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <div className="login-wrapper">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <h1>Maysa-Tech</h1>
          <Form.Item>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a onClick={this.register}>register now!</a>
        </Form>
      </div>
    );
  }
}
const LoginForm = Form.create({ name: 'normal_login' })(Login);

export default LoginForm;
