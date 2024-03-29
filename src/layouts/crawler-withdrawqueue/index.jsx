import { DatePicker, Select, Space, Table } from 'antd'
import React from 'react'
import dataCrawlerWithdrawQueueTableData from './data/dataCrawlerWithdrawQueueTableData'
const onChange = (date, dateString) => {
  console.log(date, dateString)
}
const handleChange = value => {
  console.log(`selected ${value}`)
}
const { RangePicker } = DatePicker
const CrawlerWithdrawQueue = () => {
  let { column, records, isLoading } = dataCrawlerWithdrawQueueTableData()
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

export default CrawlerWithdrawQueue
