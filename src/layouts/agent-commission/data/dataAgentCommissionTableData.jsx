import React, { useState } from 'react'
import a from '../../../tmpdata/agentcommission.json'
const dataAgentCommissionTableData = () => {
  const [isLoading, setIsloading] = useState(false)
  let tmpDataColumn = [
    {
      title: 'Agent',
      dataIndex: 'agent',
      key: 'agent'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Alias',
      dataIndex: 'alias',
      key: 'alias'
    },
    {
      title: 'Active',
      dataIndex: 'active',
      key: 'active'
    },
    {
      title: 'Commission',
      dataIndex: 'commission',
      key: 'commission'
    }
  ]
  return {
    column: tmpDataColumn,
    records: a
  }
}

export default dataAgentCommissionTableData
