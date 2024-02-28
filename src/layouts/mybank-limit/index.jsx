import React from 'react'
import dataLimitTableData from './data/dataLimitTableData'
import { Button, Input, Select, Space, Table } from 'antd'
import Search from 'antd/es/input/Search'

const { option } = Select
const MyBankLimit = () => {
  let {
    column,
    records,
    isLoading,
    handleSearch,
    handleRefresh,
    searchQuery,
    searchColumn,
    handleColumnChange
  } = dataLimitTableData()
  return (
    <>
      <Space direction="horizontal">
        <Button type="primary" onClick={handleRefresh}>
          Refresh
        </Button>
        <Select
          value={searchColumn}
          onChange={handleColumnChange}
          style={{ width: 200 }}
        >
          <Option value="all">All Columns</Option>
          <Option value="v_bankaccountno">Account No.</Option>
          <Option value="v_bankaccountname">Account Name</Option>
          <Option value="v_bankcode">Bank</Option>
          <Option value="v_type">Type</Option>
          <Option value="v_isactive">Is Active</Option>
          <Option value="n_dailydepositlimit">Daily Deposit Limit</Option>
          <Option value="dailydeposit">Current Transaction</Option>
        </Select>
        <Input
          placeholder="search..."
          value={searchQuery}
          onChange={e => handleSearch(e.target.value)}
        />
      </Space>
      <Table
        columns={column}
        dataSource={records}
        loading={isLoading}
        scroll={{ x: 10 }}
      />
    </>
  )
}

export default MyBankLimit
