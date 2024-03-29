import { Table } from "antd";
import ExampleDataTable from "./data/ExampleDataTable";

const ExamplePage = () => {
  let { column, records } = ExampleDataTable();
  return <Table dataSource={records} columns={column} />;
};

export default ExamplePage;
