import Table from "@/components/ui/Table/Table";
import Title from "antd/es/typography/Title";
import React from "react";

const BusScheduleTable = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <>
      <Title level={4}>{title}</Title>
      {children}
    </>
  );
};

export default BusScheduleTable;
