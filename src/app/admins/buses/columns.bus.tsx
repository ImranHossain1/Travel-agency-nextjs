"use client";

import { deleteBus } from "@/services/buses/delete-bus";
import { SmallDashOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps } from "antd";
import Link from "next/link";

const handleDelete = async (id: string) => {
  await deleteBus(id);
};

const getDropdownMenuItems = (id: string): MenuProps["items"] => [
  {
    key: "1",
    label: <Link href={`/admins/bus/${id}`}>Details</Link>,
  },
  {
    key: "2",
    label: <Link href={`/admins/bus/${id}/update`}>Edit</Link>,
  },
  {
    key: "3",
    label: <span>Delete</span>,
    onClick: () => {
      handleDelete(id);
    },
  },
];
export const columns = [
  {
    title: "Bus Type",
    dataIndex: "busType",
    key: "busType",
  },
  {
    title: "Bus Number",
    dataIndex: "busNumber",
    key: "busNumber",
  },
  {
    title: "Total Sit",
    dataIndex: "totalSit",
    key: "totalSit",
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
          <Button>
            <SmallDashOutlined />
          </Button>
        </Dropdown>
      );
    },
  },
];
