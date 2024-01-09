import { Button, Table } from 'antd'
import React from 'react'
import dataAgentGroupTableData from './data/dataAgentGroupTableData'

const AgentGroup = () => {
  let { column, records, isLoading } = dataAgentGroupTableData()
  return (
    <>
      <Button type="primary">Add New</Button>
      <Table dataSource={records} columns={column} loading={isLoading} />
    </>
  )
}

export default AgentGroup
