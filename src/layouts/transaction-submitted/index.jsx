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
import dataTransactionSubmittedTableData from './data/dataTransactionSubmittedTableData'

const TransactionSubmitted = () => {
  let { column, records, isLoading } = dataTransactionSubmittedTableData()
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

export default TransactionSubmitted
