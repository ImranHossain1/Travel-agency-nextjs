import Table from "@/components/ui/Table/Table";
import AdminTable from "@/components/view/Admin/AdminTable";
import React from "react";
import { columns } from "./columns.bus";
import { Bus } from "@/interfaces/bus.interfaces";
import { getAllBusSchedules } from "@/services/buses/get-allSchedules";

const AllBus = async () => {
  const data: any = await getAllBusSchedules();
  return (
    <AdminTable title="All Buses">
      <Table<Bus> columns={columns} data={data}></Table>
    </AdminTable>
  );
};

export default AllBus;
