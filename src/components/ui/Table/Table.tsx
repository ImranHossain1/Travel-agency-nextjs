import React from "react";
import { Space, Table as AntTable, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

interface TableProps<T> {
  columns: ColumnsType<T>;
  data: T[];
}

function Table<T>({ columns, data }: TableProps<T[]>) {
  return <AntTable columns={columns} dataSource={data} />;
}
export default Table;
