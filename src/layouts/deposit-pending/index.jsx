import React from 'react'
import { Checkbox, DatePicker, Input, Select, Space, Table } from 'antd'
import dataDepositPendingTableData from './data/dataDepositPendingTableData'

const DepositPending = () => {
  let { column, records, isLoading } = dataDepositPendingTableData()
  return (
    <>
      <Space direction="horizontal" size={'large'}>
        <Input placeholder="Input Transaction ID Here" />
        <Checkbox>History</Checkbox>
      </Space>
      <Table dataSource={records} columns={column} loading={isLoading} />
    </>
  )
}

export default DepositPending
