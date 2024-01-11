import { Checkbox, DatePicker, Input, Select, Space, Table } from 'antd'
import React from 'react'
import dataSmsLastAckTableData from './data/dataSmsLastAckTableData'
const onChange = (date, dateString) => {
  console.log(date, dateString)
}
const handleChange = value => {
  console.log(`selected ${value}`)
}
const SmsLastAck = () => {
  let { column, records, isLoading } = dataSmsLastAckTableData()
  const { RangePicker } = DatePicker
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

export default SmsLastAck
