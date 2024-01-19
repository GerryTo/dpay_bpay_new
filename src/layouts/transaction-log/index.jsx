import React from 'react'
import {
  Button,
  Checkbox,
  DatePicker,
  Input,
  Select,
  Space,
  Switch,
  Table,
  TimePicker
} from 'antd'
import dataTransactionLogTableData from './data/dataTransactionLogTableData'

const TransactionLog = () => {
  const handleChange = value => {
    console.log(`selected ${value}`)
  }
  let { column, records, isLoading } = dataTransactionLogTableData()
  const { RangePicker } = DatePicker
  return (
    <>
      <Space direction="horizontal" size={'large'}>
        <Input placeholder="Trx ID" />
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

export default TransactionLog
