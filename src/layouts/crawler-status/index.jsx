import { Button, DatePicker, Input, Select, Space, Table } from 'antd'
import React from 'react'
import dataCrawlerStatusTableData from './data/dataCrawlerStatusTableData'
const onChange = (date, dateString) => {
  console.log(date, dateString)
}
const handleChange = value => {
  console.log(`selected ${value}`)
}
const CrawlerStatus = () => {
  let {
    column,
    records,
    isLoading,
    handleColumnChange,
    handleSearch,
    searchColumn,
    searchQuery,
    handleRefresh
  } = dataCrawlerStatusTableData()
  return (
    <>
      <Space direction="horizontal">
        <Select
          value={searchColumn}
          onChange={handleColumnChange}
          style={{ width: 200 }}
        >
          <Option value="all">All Columns</Option>
          <Option value="v_mainuser">User</Option>
          <Option value="v_bankcode">Bank</Option>
          <Option value="v_system">System</Option>
          <Option value="v_status_desc">Note</Option>
        </Select>
        <Input
          placeholder="search..."
          value={searchQuery}
          onChange={e => handleSearch(e.target.value)}
        />
        <Button type="primary" onClick={handleRefresh}>
          Refresh
        </Button>
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

export default CrawlerStatus
