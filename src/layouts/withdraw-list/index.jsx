import React from 'react'
import { Checkbox, DatePicker, Select, Space, Switch, Table } from 'antd'
import dataWithdrawListDataTable from './data/dataWithdrawListDataTable'

const WithdrawList = () => {
  let { column, records, isLoading } = dataWithdrawListDataTable()
  const { RangePicker } = DatePicker
  const handleChange = value => {
    console.log(`selected ${value}`)
  }
  return (
    <>
      <Space direction="horizontal" size={'large'}>
        <RangePicker />
        <Checkbox>History</Checkbox>
        <Switch checkedChildren="On" unCheckedChildren="Off" />
      </Space>
      <Table dataSource={records} columns={column} loading={isLoading} />
    </>
  )
}

export default WithdrawList
