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
import dataTransactionNotMatchSamedayTableData from './data/dataTransactionNotMatchSamedayTableData'

const TransactionNotMatchSameday = () => {
  const handleChange = value => {
    console.log(`selected ${value}`)
  }
  let { column, records, isLoading } = dataTransactionNotMatchSamedayTableData()
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

export default TransactionNotMatchSameday
