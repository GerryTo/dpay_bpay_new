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
import dataTransactionUpdateLogTableData from './data/dataTransactionUpdateLogTableData'

const TransactionUpdateLog = () => {
  let { column, records, isLoading } = dataTransactionUpdateLogTableData()
  return (
    <>
      <DatePicker />
      <Table dataSource={records} columns={column} loading={isLoading} />
    </>
  )
}

export default TransactionUpdateLog
