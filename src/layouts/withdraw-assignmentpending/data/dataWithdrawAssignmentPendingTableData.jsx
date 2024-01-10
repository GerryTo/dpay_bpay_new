import React from 'react'
import a from '../../../tmpdata/db.json'
const dataWithdrawAssignmentPendingTableData = () => {
  let tmpDataColumn = [
    {
      title: 'Assignment Timestamps',
      dataIndex: 'assignment_timestamps',
      key: 'assignment_timestamps'
    },
    {
      title: 'Future Trx ID',
      dataIndex: 'future_trx_id',
      key: 'future_trx_id'
    },
    {
      title: 'Merchant ID',
      dataIndex: 'merchant_id',
      key: 'merchant_id'
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount'
    },
    {
      title: 'Bank',
      dataIndex: 'bank',
      key: 'bank'
    },
    {
      title: 'Source Bank Account',
      dataIndex: 'source_bank_account',
      key: 'source_bank_account'
    },
    {
      title: 'Source Account Name',
      dataIndex: 'source_account_name',
      key: 'source_account_name'
    },
    {
      title: 'Transaction ID',
      dataIndex: 'transaction_id',
      key: 'transaction_id'
    },
    {
      title: 'Agent Assign',
      dataIndex: 'agent_assign',
      key: 'agent_assign'
    },
    {
      title: 'Pending Time',
      dataIndex: 'pending_time',
      key: 'pending_time'
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action'
    }
  ]
  return { column: tmpDataColumn, records: a }
}

export default dataWithdrawAssignmentPendingTableData
