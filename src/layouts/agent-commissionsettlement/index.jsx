import React from 'react'
import dataAgentCommissionSettlementTableData from './data/dataAgentCommissionSettlementTableData'
import { DatePicker, Table } from 'antd'

const AgentCommissionSettlement = () => {
  let { column, records, isLoading } = dataAgentCommissionSettlementTableData()
  const { RangePicker } = DatePicker
  return (
    <>
      <RangePicker />
      <Table
        dataSource={records}
        columns={column}
        loading={isLoading}
        scroll={{ x: 10 }}
      />
    </>
  )
}

export default AgentCommissionSettlement
