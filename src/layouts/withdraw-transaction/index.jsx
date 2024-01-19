import React from 'react'
import { Checkbox, DatePicker, Select, Space, Table } from 'antd'
import dataWithdrawTransactionTableData from './data/dataWithdrawTransactionTableData'

const WithdrawTransaction = () => {
  let { column, records, isLoading } = dataWithdrawTransactionTableData()
  const { RangePicker } = DatePicker
  const handleChange = value => {
    console.log(`selected ${value}`)
  }
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
              label: 'All'
            },
            {
              value: 'pending',
              label: 'Pending'
            },
            {
              value: 'accepted',
              label: 'Accepted'
            },
            {
              value: 'failed',
              label: 'Failed'
            }
          ]}
        />
        <Checkbox>History</Checkbox>
      </Space>
      <Table
        dataSource={records}
        columns={column}
        loading={isLoading}
        scroll={{ x: 10 }}
      />
      <div>
        <table style={{ width: '100%' }}>
          <tr>
            <td colSpan={'25'}>Opening Balance</td>
            <td colSpan={'25'}>0</td>
            <td colSpan={'25'}>Current Balance</td>
            <td colSpan={'25'}>0</td>
          </tr>
          <tr>
            <td colSpan={'25'}>Total Pending DB</td>
            <td colSpan={'25'}>0</td>
            <td colSpan={'25'}>Total DB</td>
            <td colSpan={'25'}>0</td>
          </tr>
          <tr>
            <td colSpan={'25'}>Total Pending CR</td>
            <td colSpan={'25'}>0</td>
            <td colSpan={'25'}>Total CR</td>
            <td colSpan={'25'}>0</td>
          </tr>
          <tr>
            <td colSpan={'25'}></td>
            <td colSpan={'25'}></td>
            <td colSpan={'25'}>Fee</td>
            <td colSpan={'25'}>0</td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default WithdrawTransaction
