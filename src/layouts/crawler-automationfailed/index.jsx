import { DatePicker, Select, Space, Table } from 'antd'
import React from 'react'
import dataCrawlerAutomationFailedTableData from './data/dataCrawlerAutomationFailedTableData'
const onChange = (date, dateString) => {
  console.log(date, dateString)
}
const handleChange = value => {
  console.log(`selected ${value}`)
}
const { RangePicker } = DatePicker
const CrawlerAutomationFailed = () => {
  let { column, records, isLoading } = dataCrawlerAutomationFailedTableData()
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

export default CrawlerAutomationFailed
