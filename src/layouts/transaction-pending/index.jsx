import React from 'react'
import {
  Button,
  Checkbox,
  DatePicker,
  Select,
  Space,
  Switch,
  Table,
  TimePicker
} from 'antd'
import dataTransactionPendingTableData from './data/dataTransactionPendingTableData'

const TransactionPending = () => {
  let { column, records, isLoading } = dataTransactionPendingTableData()
  const { RangePicker } = DatePicker
  return (
    <>
      <Space direction="horizontal" size={'large'}>
        <RangePicker />
        <Checkbox>History</Checkbox>
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

export default TransactionPending
