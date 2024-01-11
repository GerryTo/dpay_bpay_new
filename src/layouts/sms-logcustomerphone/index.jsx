import { Checkbox, DatePicker, Input, Select, Space, Table } from 'antd'
import React from 'react'
import dataSmsLogCustomerPhoneTableData from './data/dataSmsLogCustomerPhoneTableData'
const onChange = (date, dateString) => {
  console.log(date, dateString)
}
const handleChange = value => {
  console.log(`selected ${value}`)
}
const SmsLogCustomerPhone = () => {
  let { column, records, isLoading } = dataSmsLogCustomerPhoneTableData()
  const { RangePicker } = DatePicker
  return (
    <>
      <Space>
        <Input placeholder="Input Customer Phone" />
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

export default SmsLogCustomerPhone
