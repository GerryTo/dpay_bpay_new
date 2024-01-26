import React from 'react'
import a from '../../../tmpdata/agentcommissionsettlement.json'
import { Button, Space } from 'antd'
const dataAgentCommissionSettlementTableData = () => {
  let tmpDataColumn = [
    {
      title: 'Settlement ID',
      dataIndex: 'settlement_id',
      key: 'settlement_id'
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date'
    },

    {
      title: 'Agent',
      dataIndex: 'agent',
      key: 'agent'
    },
    {
      title: 'Bank',
      dataIndex: 'bank',
      key: 'bank'
    },
    {
      title: 'Account Source',
      dataIndex: 'account_source',
      key: 'account_source'
    },
    {
      title: 'Account Target',
      dataIndex: 'account_target',
      key: 'account_target'
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount'
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status'
    },
    {
      title: 'Notes',
      dataIndex: 'notes',
      key: 'notes'
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: record => (
        <>
        <Space direction='horizontal'>
          <Button onClick="" type='primary'>Approve</Button>
          <Button onClick="" danger>Reject</Button>
        </Space>
        </>
      )
    }
  ]
  return { column: tmpDataColumn, records: a }
}

export default dataAgentCommissionSettlementTableData
