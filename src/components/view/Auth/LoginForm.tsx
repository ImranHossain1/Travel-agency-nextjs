"use client";
import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { message } from "antd";

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false); // Initialize loading state

  const [errorMessage, setErrorMessage] = useState<string>("");
  const onFinish = async (values: any) => {
    setLoading(true);
    const result = await signIn("travel-agency-backend", {
      email: values.email,
      password: values.password,
      redirect: false,
    });
    if (result?.ok && !result.error) {
      message.success("You have successfully signed in!");

      router.push("/");
    } else {
      setErrorMessage(
        "Invalid credentials. Please check your email and password."
      );
    }
    setLoading(false);
  };

  const onFinishFailed = (errorInfo: any) => {};

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input type="email" />
      </Form.Item>
      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>
      {/* Display error message */}
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={loading}>
          Sign In
        </Button>
      </Form.Item>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}{" "}
    </Form>
  );
};

export default LoginForm;
