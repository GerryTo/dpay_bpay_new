import { Checkbox, DatePicker, Input, Select, Space, Table } from 'antd'
import React from 'react'
import dataSmsAppiumTableData from './data/dataSmsAppiumTableData'
const onChange = (date, dateString) => {
  console.log(date, dateString)
}
const handleChange = value => {
  console.log(`selected ${value}`)
}
const SmsAppium = () => {
  let { column, records, isLoading } = dataSmsAppiumTableData()
  const { RangePicker } = DatePicker
  return (
    <>
      <Space>
        <RangePicker />
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

export default SmsAppium
