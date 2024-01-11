import { Checkbox, DatePicker, Input, Select, Space, Table } from 'antd'
import React from 'react'
import dataSmsFailedMatchTableData from './data/dataSmsFailedMatchTableData'
const onChange = (date, dateString) => {
  console.log(date, dateString)
}
const handleChange = value => {
  console.log(`selected ${value}`)
}
const SmsFailedMatch = () => {
  let { column, records, isLoading } = dataSmsFailedMatchTableData()
  const { RangePicker } = DatePicker

  return (
    <>
      <Space>
        <RangePicker />
        <Checkbox>History</Checkbox>
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

export default SmsFailedMatch
