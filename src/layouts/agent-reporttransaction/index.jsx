import React from 'react'
import { DatePicker, Select, Space, Table } from 'antd'
import dataAgentReportTransactionDataTable from './data/dataAgentReportTransactionDataTable'

const AgentReportTransaction = () => {
  let { column, records, isLoading } = dataAgentReportTransactionDataTable()
  const { RangePicker } = DatePicker
  const handleChange = value => {
    console.log(`selected ${value}`)
  }
  return (
    <>
      <Space direction="horizontal" size={'large'}>
        <RangePicker />
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

export default AgentReportTransaction
