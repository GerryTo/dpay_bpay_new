import React from 'react'
import { Checkbox, DatePicker, Input, Select, Space, Table } from 'antd'
import dataDepositQueueAlert from './data/dataDepositQueueAlert'

const DepositQueueAlert = () => {
  let { column, records, isLoading } = dataDepositQueueAlert()

  return (
    <>
      <Table dataSource={records} columns={column} loading={isLoading} />
    </>
  )
}

export default DepositQueueAlert
