"use client";

import { deleteBus } from "@/services/buses/delete-bus";
import { SmallDashOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps } from "antd";

export const columns = [
  {
    title: "Start Time",
    dataIndex: "startTime",
    key: "startTime",
  },
  {
    title: "End Time",
    dataIndex: "endTime",
    key: "endTime",
  },
  {
    title: "Start Date",
    dataIndex: "startDate",
    key: "startDate",
  },
  {
    title: "End Date",
    dataIndex: "endDate",
    key: "endDate",
  },
  {
    title: "Already Booked",
    dataIndex: "bookedSit",
    key: "bookedSit",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
];
