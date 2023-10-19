import Table from "@/components/ui/Table/Table";
import AdminTable from "@/components/view/Admin/AdminTable";
import { ColumnType } from "antd/es/table";
import React from "react";
import { columns } from "./columns.bus";
import { getAllBuses } from "@/services/buses/get-all-buses";
import { Bus } from "@/interfaces/bus.interfaces";

const AllDoctorByAdmin = async () => {
  
  const data: any = await getAllBuses();
  console.log(data);
  return (
    <AdminTable title="All Buses">
      <Table<Bus> columns={columns} data={data}></Table>
    </AdminTable>
  );
};

export default AllDoctorByAdmin;
