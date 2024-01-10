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
import dataTransactionResubmitAutoMatchingTableData from './data/dataTransactionResubmitAutoMatchingTableData'

const TransactionResubmitAutoMatching = () => {
  const handleChange = value => {
    console.log(`selected ${value}`)
  }
  let { column, records, isLoading } =
    dataTransactionResubmitAutoMatchingTableData()
  return (
    <>
      <Space direction="horizontal" size={'large'}>
        <Button type="primary">Submit</Button>
      </Space>
      <Table dataSource={records} columns={column} loading={isLoading} />
    </>
  )
}

export default TransactionResubmitAutoMatching
