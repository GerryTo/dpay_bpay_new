import { Checkbox, DatePicker, Input, Select, Space, Table } from 'antd'
import React from 'react'
import dataSmsSuspectedCustomerTableData from './data/dataSmsSuspectedCustomerTableData'
const onChange = (date, dateString) => {
  console.log(date, dateString)
}
const handleChange = value => {
  console.log(`selected ${value}`)
}
const SmsSuspectedCustomer = () => {
  let { column, records, isLoading } = dataSmsSuspectedCustomerTableData()
  const { RangePicker } = DatePicker
  return (
    <>
      <Space direction="vertical">
        <Space>
          <DatePicker />
        </Space>

        <Table dataSource={records} columns={column} loading={isLoading} />
      </Space>
    </>
  )
}

export default SmsSuspectedCustomer
