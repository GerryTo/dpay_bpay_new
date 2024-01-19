import { Button, DatePicker, Select, Space, Table } from 'antd'
import React from 'react'
import dataSettlementTableData from './data/dataSettlementTableData'
const onChange = (date, dateString) => {
  console.log(date, dateString)
}
const handleChange = value => {
  console.log(`selected ${value}`)
}
const { RangePicker } = DatePicker
const Settlement = () => {
  let { column, records, isLoading } = dataSettlementTableData()
  return (
    <>
      <Space>
        <RangePicker />
        <Button type="primary">Add New</Button>
      </Space>

      <Table
        dataSource={records}
        columns={column}
        loading={isLoading}
        scroll={{ x: 10 }}
      />
    </>
  )
}

export default Settlement
