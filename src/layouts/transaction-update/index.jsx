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

const TransactionUpdate = () => {
  return (
    <>
      <Space direction="vertical" size={'large'}>
        <Space direction="horizontal" size={'large'}>
          Transaction ID :
          <input placeholder="Transaction ID" />
        </Space>
        <Space direction="horizontal" size={'large'}>
          Amount :
          <input placeholder="Amount" />
        </Space>
        <Space direction="horizontal" size={'large'}>
          Status :
          <input placeholder="Status" />
        </Space>
      </Space>
    </>
  )
}

export default TransactionUpdate
