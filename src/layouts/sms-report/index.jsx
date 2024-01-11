import { Checkbox, DatePicker, Input, Select, Space, Table } from 'antd'
import React from 'react'
import dataSmsReportTableData from './data/dataSmsReportTableData'
const onChange = (date, dateString) => {
  console.log(date, dateString)
}
const handleChange = value => {
  console.log(`selected ${value}`)
}
const { RangePicker } = DatePicker
const SmsReport = () => {
  let { column, records, isLoading } = dataSmsReportTableData()
  return (
    <>
      <Space direction="vertical">
        <Space>
          <RangePicker />
          <Checkbox>History</Checkbox>
        </Space>

        <Table dataSource={records} columns={column} loading={isLoading} />
      </Space>
    </>
  )
}

export default SmsReport
