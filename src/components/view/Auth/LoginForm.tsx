"use client";
import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const onFinish = async (values: any) => {
    //console.log("Success:", values);
    const result = await signIn("travel-agency-backend", {
      email: values.email,
      password: values.password,
      redirect: false,
      // callbackUrl: "/",
    });
    //console.log(result);
    if (result?.ok && !result.error) {
      router.push("/");
      // router.refresh();
    } else {
      // If login fails, set the error message.
      setErrorMessage(
        "Invalid credentials. Please check your email and password."
      );
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

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
        <Button type="primary" htmlType="submit">
          Sign In
        </Button>
      </Form.Item>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}{" "}
    </Form>
  );
};

export default LoginForm;
