import { Table } from 'antd'
import React from 'react'
import dataAgentCommissionTableData from './data/dataAgentCommissionTableData'
const AgentCommission = () => {
  let { column, records, isLoading } = dataAgentCommissionTableData()
  return (
    <Table
      dataSource={records}
      columns={column}
      loading={isLoading}
      scroll={{ x: 10 }}
    />
  )
}

export default AgentCommission
