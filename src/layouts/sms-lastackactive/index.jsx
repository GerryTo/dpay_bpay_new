import { Checkbox, DatePicker, Input, Select, Space, Table } from 'antd'
import React from 'react'
import dataSmsLastAckActiveTableData from './data/dataSmsLastAckActiveTableData'
const onChange = (date, dateString) => {
  console.log(date, dateString)
}
const handleChange = value => {
  console.log(`selected ${value}`)
}
const SmsLastAckActive = () => {
  let { column, records, isLoading } = dataSmsLastAckActiveTableData()
  const { RangePicker } = DatePicker
  return (
    <>
      <Space></Space>

      <Table
        dataSource={records}
        columns={column}
        loading={isLoading}
        scroll={{ x: 10 }}
      />
    </>
  )
}

export default SmsLastAckActive
