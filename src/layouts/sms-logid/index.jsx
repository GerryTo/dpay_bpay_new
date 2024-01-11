import { Checkbox, DatePicker, Input, Select, Space, Table } from 'antd'
import React from 'react'
import dataSmsLogIdTableData from './data/dataSmsLogIdTableData'
const onChange = (date, dateString) => {
  console.log(date, dateString)
}
const handleChange = value => {
  console.log(`selected ${value}`)
}
const SmsLogId = () => {
  let { column, records, isLoading } = dataSmsLogIdTableData()
  return (
    <>
      <Space direction="vertical">
        <Space>
          <Input placeholder="Input Trx ID Here" />
          <Checkbox>History</Checkbox>
        </Space>

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

export default SmsLogId
