import React from 'react'
import { Checkbox, DatePicker, Select, Space, Switch, Table } from 'antd'
import dataWithdrawCheckDataTable from './data/dataWithdrawCheckDataTable'

const WithdrawCheck = () => {
  let { column, records, isLoading } = dataWithdrawCheckDataTable()
  const { RangePicker } = DatePicker
  const handleChange = value => {
    console.log(`selected ${value}`)
  }
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

export default WithdrawCheck
