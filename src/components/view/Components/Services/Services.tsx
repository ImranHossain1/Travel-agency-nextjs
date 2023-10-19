"use client";
import React, { useEffect, useState } from "react";
import { Button, DatePicker, Form, Input, Select } from "antd";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { message } from "antd";
import { Option } from "antd/es/mentions";
import Image from "next/image";
import BusScheduleTable from "../../BusSchedules/BusSchedules";
import { columns } from "./Service";
import Table from "@/components/ui/Table/Table";
import { fetchJourniesData } from "@/services/journies/getSchedules";
import { BusSchedule } from "@/interfaces/busSchedules.interface";
type FieldType = {
  startingPoint?: string;
  endPoint?: string;
  startDate?: Date;
  endDate?: Date;
};

const Journies: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false); // Initialize loading state
  const [data, setData] = useState<any[]>([]); // To store the fetched data
  const [form] = Form.useForm();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const fetchInitialData = async () => {
    try {
      setLoading(true);
      const result: any = await fetchJourniesData();

      setData(result);
    } catch (error) {
      // Handle errors
    } finally {
      setLoading(false); // Set loading state to false after data is fetched or in case of an error
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, []);
  const onFinish = async (values: any) => {
    const startDate = values.startDate
      ? values.startDate.format("YYYY-MM-DD")
      : "";
    const endDate = values.endDate ? values.endDate.format("YYYY-MM-DD") : "";
    const startingPoint = values.startingPoint;
    const endPoint = values.endPoint;

    setLoading(true);
    try {
      const result = await fetchJourniesData(
        startDate,
        endDate,
        startingPoint,
        endPoint
      );

      setData(result);
      // Handle the fetched data as needed
    } catch (error) {
      // Handle errors
    } finally {
      setLoading(false); // Set loading state to false after data is fetched or in case of an error
    }
  };

  const onFinishFailed = (errorInfo: any) => {};

  return (
    <div className="w-11/12 lg:w-6/12 mx-auto my-8">
      <div className="card flex-shrink-1 w-full shadow-2xl bg-base-100 mt-4 md:mt-8 p-4 md:p-8 lg:p-20">
        <Form
          name="service-form"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
        >
          <Form.Item<FieldType> label="Starting Point" name="startingPoint">
            <Select
              placeholder="Select starting point"
              style={{ width: "100%" }}
            >
              <Option value="DHAKA">DHAKA</Option>
              <Option value="KHULNA">KHULNA</Option>
              <Option value="RAJSHAHI">RAJSHAHI</Option>
              <Option value="SYLHET">SYLHET</Option>
              <Option value="BARISHAL">BARISHAL</Option>
              <Option value="CHOTTOGRAM">CHOTTOGRAM</Option>
              <Option value="RONGPUR">RONGPUR</Option>
            </Select>
          </Form.Item>
          <Form.Item<FieldType> label="End Point" name="endPoint">
            <Select placeholder="Select end point" style={{ width: "100%" }}>
              <Option value="DHAKA">DHAKA</Option>
              <Option value="KHULNA">KHULNA</Option>
              <Option value="RAJSHAHI">RAJSHAHI</Option>
              <Option value="SYLHET">SYLHET</Option>
              <Option value="BARISHAL">BARISHAL</Option>
              <Option value="CHOTTOGRAM">CHOTTOGRAM</Option>
              <Option value="RONGPUR">RONGPUR</Option>
            </Select>
          </Form.Item>
          <Form.Item<FieldType> label="Starting Date" name="startDate">
            <DatePicker style={{ width: "100%" }} format="YYYY-MM-DD" />
          </Form.Item>
          <Form.Item<FieldType> label="Ending Date" name="endDate">
            <DatePicker style={{ width: "100%" }} format="YYYY-MM-DD" />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" loading={loading}>
              Submit
            </Button>
          </Form.Item>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </Form>
      </div>

      <div className="mt-6 md:mt-10">
        {data.length > 0 ? (
          <BusScheduleTable title="All Schedules">
            <Table<BusSchedule> columns={columns} data={data}></Table>
          </BusScheduleTable>
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </div>
  );
};

export default Journies;
