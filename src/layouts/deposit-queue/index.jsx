import React from 'react'
import { Checkbox, DatePicker, Input, Select, Space, Table } from 'antd'
import dataDepositQueueTableData from './data/dataDepositQueueTableData'

const DepositQueue = () => {
  let { column, records, isLoading } = dataDepositQueueTableData()
  const handleChange = value => {
    console.log(`selected ${value}`)
  }
  return (
    <>
      <Space direction="horizontal" size={'large'}>
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

export default DepositQueue
