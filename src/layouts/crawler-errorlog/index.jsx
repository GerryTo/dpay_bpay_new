import { DatePicker, Select, Space, Table } from 'antd'
import React from 'react'
import dataCrawlerErrorLogTableData from './data/dataCrawlerErrorLogTableData'
const onChange = (date, dateString) => {
  console.log(date, dateString)
}
const handleChange = value => {
  console.log(`selected ${value}`)
}
const { RangePicker } = DatePicker
const CrawlerErrorLog = () => {
  let { column, records, isLoading } = dataCrawlerErrorLogTableData()
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

export default CrawlerErrorLog
