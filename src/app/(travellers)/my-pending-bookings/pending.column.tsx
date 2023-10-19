"use client";

import { deleteBus } from "@/services/buses/delete-bus";
import { SmallDashOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps } from "antd";
import Link from "next/link";

export const pendingColumn = [
  {
    title: "Bus Schedule Id",
    dataIndex: "busScheduleId",
    key: "busScheduleId",
  },
  {
    title: "Booking Status",
    dataIndex: "bookingStatus",
    key: "bookingStatus",
  },
  {
    title: "Payment Status",
    dataIndex: "paymentStatus",
    key: "paymentStatus",
  },
];
