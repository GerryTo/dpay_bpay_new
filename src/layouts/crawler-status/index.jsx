import { DatePicker, Select, Space, Table } from 'antd'
import React from 'react'
import dataCrawlerStatusTableData from './data/dataCrawlerStatusTableData'
const onChange = (date, dateString) => {
  console.log(date, dateString)
}
const handleChange = value => {
  console.log(`selected ${value}`)
}
const CrawlerStatus = () => {
  let { column, records, isLoading } = dataCrawlerStatusTableData()
  return (
    <>
      <Space direction="vertical">
        <Space></Space>

        <Table dataSource={records} columns={column} loading={isLoading} />
      </Space>
    </>
  )
}

export default CrawlerStatus
