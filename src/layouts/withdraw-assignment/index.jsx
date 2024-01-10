import React from 'react'
import { Checkbox, DatePicker, Select, Space, Table } from 'antd'
import dataWithdrawAssignmentTableData from './data/dataWithdrawAssignmentTableData'

const WithdrawAssignment = () => {
  let { column, records, isLoading } = dataWithdrawAssignmentTableData()
  const { RangePicker } = DatePicker
  return (
    <>
      <Space direction="horizontal" size={'large'}>
        <RangePicker />
        <Checkbox>History</Checkbox>
      </Space>
      <Table dataSource={records} columns={column} loading={isLoading} />
    </>
  )
}

export default WithdrawAssignment
