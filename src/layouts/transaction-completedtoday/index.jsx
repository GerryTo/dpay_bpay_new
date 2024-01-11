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
import dataTransactionCompletedToday from './data/dataTransactionCompletedTodayTableData'

const TransactionCompletedToday = () => {
  let { column, records, isLoading } = dataTransactionCompletedToday()
  const onChange = (date, dateString) => {
    console.log(date, dateString)
  }
  const { RangePicker } = DatePicker
  const handleChange = value => {
    console.log(`selected ${value}`)
  }

  return (
    <>
      <Space direction="horizontal" size={'large'}>
        <Select
          style={{
            width: 120
          }}
          defaultValue={'all'}
          onChange={handleChange}
          options={[
            {
              value: 'all',
              label: 'All'
            },
            {
              value: 'deposit',
              label: 'Deposit'
            },
            {
              value: 'withdraw',
              label: 'Withdraw'
            }
          ]}
        />
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

export default TransactionCompletedToday
