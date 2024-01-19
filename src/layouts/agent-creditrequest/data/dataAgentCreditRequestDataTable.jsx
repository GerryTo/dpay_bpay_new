import React from 'react'
import a from '../../../tmpdata/agentcreditrequest.json'
const dataAgentCreditRequestDataTable = () => {
  let tmpDataColumn = [
    {
      title: 'Request ID',
      dataIndex: 'request_id',
      key: 'request_id'
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
      title: 'Account No.',
      dataIndex: 'account_no',
      key: 'account_no'
    },
    {
      title: 'Bank',
      dataIndex: 'bank',
      key: 'bank'
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
      key: 'action'
    }
  ]
  return { column: tmpDataColumn, records: a }
}

export default dataAgentCreditRequestDataTable
