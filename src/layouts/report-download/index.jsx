import React from 'react'
import { Select, Space, Table } from 'antd'
import dataDownload from './data/dataDownload'

const handleChange = value => {
  console.log(`selected ${value}`)
}
const Download = () => {
  let { column, records, isLoading } = dataDownload()
  return (
    <>
      <Space>
        <Select
          defaultValue="bank1"
          style={{
            width: 120
          }}
          onChange={handleChange}
          options={[
            {
              value: 'bank1',
              label: 'Bank 1'
            },
            {
              value: 'bank2',
              label: 'Bank 2'
            },
            {
              value: 'bank3',
              label: 'Bank 3'
            }
          ]}
        />
        <Select
          defaultValue="daily"
          style={{
            width: 120
          }}
          onChange={handleChange}
          options={[
            {
              value: 'daily',
              label: 'Daily'
            },
            {
              value: 'weekly',
              label: 'Weekly'
            },
            {
              value: 'monthly',
              label: 'Monthly'
            }
          ]}
        />
        <Select
          defaultValue="deposit"
          style={{
            width: 120
          }}
          onChange={handleChange}
          options={[
            {
              value: 'deposit',
              label: 'Deposit'
            },
            {
              value: 'withdraw',
              label: 'Withdraw'
            },
            {
              value: 'adjustment',
              label: 'Adjustment'
            }
          ]}
        />
      </Space>

      <Table dataSource={records} columns={column} loading={isLoading} />
    </>
  )
}

export default Download
