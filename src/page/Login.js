import React from "react";
import { Button, Form, Input } from "antd";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  createDataAccount,
  dataCurrentAccount,
} from "../features/slice/loginSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = (values) => {
    dispatch(dataCurrentAccount(values));
    dispatch(
      createDataAccount({
        id: uuidv4(),
        username: values.username,
        password: values.password,
        action: {
          create: false,
          delete: false,
          update: false,
        },
      })
    );
    navigate("/");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login">
      <div className="login-title">Thong tin dang nhap</div>

      <Form
        className="login-form"
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" className="login-btn-login">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
