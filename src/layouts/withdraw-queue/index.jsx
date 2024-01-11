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
import dataWithdrawQueueTableData from './data/dataWithdrawQueueTableData'

const WithdrawQueue = () => {
  let { column, records, isLoading } = dataWithdrawQueueTableData()

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

export default WithdrawQueue
