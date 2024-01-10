import React from 'react'
import { Checkbox, DatePicker, Select, Space, Table } from 'antd'
import dataWithdrawAssignmentPendingTableData from './data/dataWithdrawAssignmentPendingTableData'

const WithdrawAssignmentPending = () => {
  let { column, records, isLoading } = dataWithdrawAssignmentPendingTableData()
  const { RangePicker } = DatePicker
  return (
    <>
      <Space direction="horizontal" size={'large'}>
        <RangePicker />
      </Space>
      <Table dataSource={records} columns={column} loading={isLoading} />
    </>
  )
}

export default WithdrawAssignmentPending
