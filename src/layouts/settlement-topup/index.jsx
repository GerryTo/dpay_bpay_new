import { Button, DatePicker, Select, Space, Table } from 'antd'
import React from 'react'
import dataSettlementTopupTableData from './data/dataSettlementTopupTableData'
const onChange = (date, dateString) => {
  console.log(date, dateString)
}
const handleChange = value => {
  console.log(`selected ${value}`)
}
const { RangePicker } = DatePicker
const SettlementTopup = () => {
  let { column, records, isLoading } = dataSettlementTopupTableData()
  return (
    <>
      <Space direction="vertical">
        <Space></Space>

        <Table
          dataSource={records}
          columns={column}
          loading={isLoading}
          scroll={{ x: 10 }}
        />
      </Space>
    </>
  )
}

export default SettlementTopup
