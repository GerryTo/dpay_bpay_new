import React from 'react'
import { Checkbox, DatePicker, Input, Select, Space, Table } from 'antd'
import dataDepositQueueUnmatchedTableData from './data/dataDepositQueueUnmatchedTableData'

const DepositQueueUnmatched = () => {
  let { column, records, isLoading } = dataDepositQueueUnmatchedTableData()
  const handleChange = value => {
    console.log(`selected ${value}`)
  }
  const { RangePicker } = DatePicker
  return (
    <>
      <Space direction="horizontal" size={'large'}>
        <RangePicker />
        <Select
          defaultValue="all"
          style={{
            width: 120
          }}
          onChange={handleChange}
          options={[
            {
              value: 'all',
              label: 'All Account'
            },
            {
              value: 'nagad',
              label: 'Nagad'
            },
            {
              value: 'bkash',
              label: 'Bkash'
            }
          ]}
        />
        <Checkbox>History</Checkbox>
      </Space>
      <Table dataSource={records} columns={column} loading={isLoading} />
    </>
  )
}

export default DepositQueueUnmatched
