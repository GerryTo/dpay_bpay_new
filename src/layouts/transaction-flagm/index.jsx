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
import dataTransactionFlagMTableData from './data/dataTransactionFlagMTableData'

const TransactionFlagM = () => {
  const handleChange = value => {
    console.log(`selected ${value}`)
  }
  let { column, records, isLoading } = dataTransactionFlagMTableData()
  return (
    <>
      <Select
        style={{
          width: 120
        }}
        defaultValue={'all'}
        onChange={handleChange}
        options={[
          {
            value: 'all',
            label: 'All Account'
          },
          {
            value: 'acc1',
            label: 'Account 1'
          },
          {
            value: 'acc2',
            label: 'Account 2'
          }
        ]}
      />
      <Table
        dataSource={records}
        columns={column}
        loading={isLoading}
        scroll={{ x: 10 }}
      />
    </>
  )
}

export default TransactionFlagM
