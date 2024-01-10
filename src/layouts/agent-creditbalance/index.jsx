import React from 'react'
import dataAgentCreditBalanceTableData from './data/dataAgentCreditBalanceTableData'
import { Table } from 'antd'

const AgentCreditBalance = () => {
  let { column, records, isLoading } = dataAgentCreditBalanceTableData()
  return (
    <>
      <Table dataSource={records} columns={column} loading={isLoading} />
    </>
  )
}

export default AgentCreditBalance
