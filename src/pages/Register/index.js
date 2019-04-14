import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import './index.less';

@Form.create()
class Register extends React.Component {
  handleSubmit = (e) => {
    const { form } = this.props;
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        const { history } = this.props;
        history.push('/login');
      }
    });
  }

  render() {
    const { form } = this.props;
    const { getFieldDecorator, getFieldValue } = form;
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
          <Form.Item>
            {getFieldDecorator('confirmPassword', {
              rules: [
                { required: true, message: 'Please confirm your Password!' },
                {
                  validator: (rule, value, callback) => {
                    if (value && value !== getFieldValue('password')) {
                      callback('两次输入不一致！');
                    }
                    callback();
                  }
                }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            注册
          </Button>
        </Form>
      </div>
    );
  }
}
export default Register;
