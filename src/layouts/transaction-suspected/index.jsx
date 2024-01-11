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
import dataTransactionSuspectedTableData from './data/dataTransactionSuspectedTableData'

const TransactionSuspected = () => {
  let { column, records, isLoading } = dataTransactionSuspectedTableData()
  return (
    <>
      <Table
        dataSource={records}
        columns={column}
        loading={isLoading}
        scroll={{ x: 10 }}
      />
    </>
  )
}

export default TransactionSuspected
