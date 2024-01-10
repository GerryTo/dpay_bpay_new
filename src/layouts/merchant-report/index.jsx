import React from 'react'
import { DatePicker, Select, Space, Table } from 'antd'
import dataMerchantReport from './data/dataMerchantReport'

const MerchantReport = () => {
  let { column, records, isLoading } = dataMerchantReport()
  const { RangePicker } = DatePicker
  const handleChange = value => {
    console.log(`selected ${value}`)
  }
  return (
    <>
      <Space direction="horizontal" size={'large'}>
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

export default MerchantReport
