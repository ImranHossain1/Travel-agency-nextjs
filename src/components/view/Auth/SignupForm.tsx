"use client";
import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { message } from "antd";
type FieldType = {
  email?: string;
  password?: string;
  name?: string;
};

const SignUpForm: React.FC = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { data: session }: any = useSession(); // Get the current session

  const onFinish = async (values: any) => {
    try {
      // Send a POST request to your signup API
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/signUp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            password: values.password,
          }),
        }
      );

      if (response.ok) {
        // If the user was created successfully, redirect to the login page
        message.success("Signup successful. You can now log in.");

        router.push("/login");
      } else {
        // Handle signup errors here
        const data = await response.json();
        setErrorMessage(data.message);
      }
    } catch (error) {
      // Handle fetch errors here
      setErrorMessage("An error occurred while signing up. Please try again.");
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
        label="Full Name"
        name="name"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input type="text" />
      </Form.Item>
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
          Sign Up
        </Button>
      </Form.Item>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}{" "}
    </Form>
  );
};

export default SignUpForm;
