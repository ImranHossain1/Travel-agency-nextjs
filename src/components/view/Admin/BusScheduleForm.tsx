"use client";
import React, { useEffect, useState } from "react";
import { Button, DatePicker, Form, Input, Select, TimePicker } from "antd";
import { Option } from "antd/es/mentions";
import { fetchJourniesData } from "@/services/journies/getSchedules";
import { getAllBuses } from "@/services/buses/get-all-buses";

import Driver from "@/interfaces/driver.interface";
import { getAllDrivers } from "@/services/buses/get-all-drivers";

type FieldType = {
  startingPoint?: string;
  endPoint?: string;
  startDate?: Date;
  endDate?: Date;
  startTime: string;
  endTime: string;
  dayOfWeek: string;
  busFare: number;
  driverId: number;
  busId: number;
};

const BusScheduleForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [buses, setBuses] = useState<any[]>([]);
  const [selectedDriverId, setSelectedDriverId] = useState<number | undefined>(
    undefined
  );
  const [selectedBusId, setSelectedBusId] = useState<number | undefined>(
    undefined
  );

  const fetchInitialData = async () => {
    try {
      setLoading(true);
      const result: any = await fetchJourniesData();
      setData(result);
    } catch (error) {
      // Handle errors
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  const onFinish = async (values: FieldType) => {
    const startingPoint = values.startingPoint;
    const endPoint = values.endPoint;
    const dayOfWeek = values.dayOfWeek;
    const startDate = values.startDate;
    const endDate = values.endDate;
    const startTime = values.startTime;
    const endTime = values.endTime;
    const busFare = values.busFare;
    const driverId = values.driverId;
    const busId = values.busId;
    console.log(values);
    try {
      // Handle the fetched data as needed
    } catch (error) {
      // Handle errors
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo: any) => {};

  useEffect(() => {
    async function fetchData() {
      try {
        const driverData = await getAllDrivers();
        const busData = await getAllBuses();
        setDrivers(driverData);
        setBuses(busData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
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
          <Form.Item<FieldType> label="Day Of Week" name="dayOfWeek">
            <Select placeholder="Day Of Week" style={{ width: "100%" }}>
              <Option value="Sunday">Sunday</Option>
              <Option value="Monday">Monday</Option>
              <Option value="Tuesday">Tuesday</Option>
              <Option value="Wednesday">Wednesday</Option>
              <Option value="Thursday">Thursday</Option>
              <Option value="Friday">Friday</Option>
              <Option value="Saturday">Saturday</Option>
            </Select>
          </Form.Item>
          <Form.Item<FieldType> label="Starting Time" name="startTime">
            <TimePicker style={{ width: "100%" }} format="HH:mm" />
          </Form.Item>
          <Form.Item<FieldType> label="Ending Time" name="endTime">
            <TimePicker style={{ width: "100%" }} format="HH:mm" />
          </Form.Item>
          <Form.Item<FieldType> label="Starting Date" name="startDate">
            <DatePicker style={{ width: "100%" }} format="YYYY-MM-DD" />
          </Form.Item>
          <Form.Item<FieldType> label="Ending Date" name="endDate">
            <DatePicker style={{ width: "100%" }} format="YYYY-MM-DD" />
          </Form.Item>
          <Form.Item<FieldType>
            label="Bus Fare"
            name="busFare"
            rules={[{ required: true, message: "Please input Bus Fare!" }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item label="Driver ID" name="driverId">
            <Select
              placeholder="Select a driver"
              style={{ width: "100%" }}
              value={selectedDriverId}
              onChange={(value) => setSelectedDriverId(value)}
            >
              {drivers.map((driver) => (
                <Option key={driver.id} value={driver.id}>
                  {driver?.user?.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Bus ID" name="busId">
            <Select
              placeholder="Select a bus"
              style={{ width: "100%" }}
              value={selectedBusId}
              onChange={(value) => setSelectedBusId(value)}
            >
              {buses.map((bus) => (
                <Option key={bus.id} value={bus.id}>
                  {bus.busNumber}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" loading={loading}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default BusScheduleForm;
