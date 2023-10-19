"use client";

import { Button, Dropdown, MenuProps } from "antd";
import Link from "next/link";

const getDropdownMenuItems = (id: string): MenuProps["items"] => [
  {
    key: "1",
    label: <Link href={`/my-bookings/${id}`}>Details</Link>,
  },
];
export const columns = [
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
    title: "Starting Point",
    dataIndex: "startingPoint",
    key: "startPoint",
  },
  {
    title: "End Point",
    dataIndex: "endPoint",
    key: "endPoint",
  },
  {
    title: "bookedSit",
    dataIndex: "bookedSit",
    key: "bookedSit",
  },
  {
    title: "Bus Fare",
    dataIndex: "busFare",
    key: "busFare",
  },
  {
    title: "Action",
    key: "action",
    render: (record: any) => {
      const items = getDropdownMenuItems(record.id);

      return (
        <Dropdown
          placement="bottomLeft"
          overlayClassName="min-w-[150px]"
          menu={{
            items: items,
          }}
        >
          <Button>Details</Button>
        </Dropdown>
      );
    },
  },
];
