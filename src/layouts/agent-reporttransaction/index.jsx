import React from 'react'
import { DatePicker, Table } from 'antd'
import dataAgentReportTransactionDataTable from './data/dataAgentReportTransactionDataTable'

const AgentReportTransaction = () => {
  let { column, records, isLoading } = dataAgentReportTransactionDataTable()
  const { RangePicker } = DatePicker
  return (
    <>
      <RangePicker />
      <Table dataSource={records} columns={column} loading={isLoading} />
    </>
  )
}

export default AgentReportTransaction
