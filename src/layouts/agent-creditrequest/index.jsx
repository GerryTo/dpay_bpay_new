import React from 'react'
import { DatePicker, Table } from 'antd'
import dataAgentCreditRequestDataTable from './data/dataAgentCreditRequestDataTable'

const AgentCreditRequest = () => {
  let { column, records, isLoading } = dataAgentCreditRequestDataTable()
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

export default AgentCreditRequest
