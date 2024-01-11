import { Checkbox, DatePicker, Input, Select, Space, Table } from 'antd'
import React from 'react'
import dataSmsCriteriaNotMatchingIdTableData from './data/dataSmsCriteriaNotMatchingIdTableData'
const onChange = (date, dateString) => {
  console.log(date, dateString)
}
const handleChange = value => {
  console.log(`selected ${value}`)
}
const SmsCriteriaNotMatchingId = () => {
  let { column, records, isLoading } = dataSmsCriteriaNotMatchingIdTableData()
  return (
    <>
      <Space direction="vertical">
        <Space>
          <Input placeholder="Input Trx ID Here" />
          <Checkbox>History</Checkbox>
        </Space>

        <Table dataSource={records} columns={column} loading={isLoading} />
      </Space>
    </>
  )
}

export default SmsCriteriaNotMatchingId
