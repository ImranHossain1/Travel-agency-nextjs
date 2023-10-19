"use client";
import React, { useState } from "react";
import { Button, Form, Input, Select } from "antd";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { createBus } from "@/services/buses/create-bus";

type FieldType = {
  busNumber?: string;
  totalSit?: string;
  busType?: string;
};

const CreateBusForm: React.FC = () => {
  //   const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState<string>("");
  const onFinish = async (values: any) => {
    setLoading(true);
    await createBus({
      totalSit: parseInt(values.totalSit),
      busNumber: values.busNumber,
      busType: values.busType,
    });

    setLoading(false);
  };

  const onFinishFailed = (errorInfo: any) => {
    setErrorMessage("An error occurred. Please try again.");
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true, busType: "AC" }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Bus Type"
          name="busType"
          rules={[{ required: true, message: "Please select Bus Type!" }]} // Change the message
        >
          <Select defaultValue="AC">
            <Select.Option value="AC">AC</Select.Option>
            <Select.Option value="Non_AC">NON AC</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item<FieldType>
          label="Bus Number"
          name="busNumber"
          rules={[{ required: true, message: "Please input Bus Number!" }]}
        >
          <Input type="text" />
        </Form.Item>
        <Form.Item<FieldType>
          label="Total Sit"
          name="totalSit"
          rules={[
            {
              required: true,
              message: "Please input How many sits are in the bus?",
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            disabled={loading}
            loading={loading}
          >
            {loading ? "Adding Bus..." : "Add New Bus"}
          </Button>
        </Form.Item>
        <div className="flex justify-center items-center h-16">
          {!loading && errorMessage && (
            <p style={{ color: "red" }}>{errorMessage}</p>
          )}
        </div>
      </Form>
    </div>
  );
};

export default CreateBusForm;
