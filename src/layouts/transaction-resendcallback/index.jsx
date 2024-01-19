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
import dataTransactionResendCallback from './data/dataTransactionResendCallbackTableData'

const TransactionResendCallback = () => {
  let { column, records, isLoading } = dataTransactionResendCallback()
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
        <DatePicker onChange={onChange} />
        <Button type="primary">Resend Callback</Button>
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

export default TransactionResendCallback
