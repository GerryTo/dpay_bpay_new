import React from 'react'
import dataAgentCreditAdjustmentTableData from './data/dataAgentCreditAdjustmentTableData'
import { Table } from 'antd'

const AgentCreditAdjustment = () => {
  let { column, records, isLoading } = dataAgentCreditAdjustmentTableData()
  console.log(records)
  return (
    <>
      <Table
        dataSource={records}
        columns={column}
        loading={isLoading}
        scroll={{ x: 10 }}
      />
    </>
  )
}

export default AgentCreditAdjustment
