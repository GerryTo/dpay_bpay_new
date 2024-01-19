import React from 'react'
import a from '../../../tmpdata/agentcreditbalance.json'
const dataAgentCreditBalanceTableData = () => {
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
      title: 'Nagad',
      dataIndex: 'nagad',
      key: 'nagad'
    },
    {
      title: 'Rocket',
      dataIndex: 'rocket',
      key: 'rocket'
    },
    {
      title: 'Bkash',
      dataIndex: 'bkash',
      key: 'bkash'
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action'
    }
  ]
  return { column: tmpDataColumn, records: a }
}

export default dataAgentCreditBalanceTableData
