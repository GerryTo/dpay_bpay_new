const ExampleDataTable = () => {
  let tempColumn = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
  ];

  const data = [
    {
      name: "gerry",
      age: 10,
    },
  ];
  return {
    column: tempColumn,
    records: data,
  };
};

export default ExampleDataTable;
