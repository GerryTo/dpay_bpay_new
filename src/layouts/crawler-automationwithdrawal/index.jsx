import { DatePicker, Select, Space, Table } from 'antd'
import React from 'react'
import dataCrawlerAutomationWithdrawalTableData from './data/dataCrawlerAutomationWithdrawalTableData'
const onChange = (date, dateString) => {
  console.log(date, dateString)
}
const handleChange = value => {
  console.log(`selected ${value}`)
}
const { RangePicker } = DatePicker
const CrawlerAutomationWithdrawal = () => {
  let { column, records, isLoading } =
    dataCrawlerAutomationWithdrawalTableData()
  return (
    <>
      <Space direction="vertical">
        <Space>
          <RangePicker />
        </Space>

        <Table dataSource={records} columns={column} loading={isLoading} />
      </Space>
    </>
  )
}

export default CrawlerAutomationWithdrawal
