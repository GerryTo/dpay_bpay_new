import React from 'react'
import a from '../../../tmpdata/db.json'
const dataWithdrawAssignmentTableData = () => {
  let tmpDataColumn = [
    {
      title: 'Future Trx ID',
      dataIndex: 'future_trx_id',
      key: 'future_trx_id'
    },
    {
      title: 'System Timestamp',
      dataIndex: 'system_timestamp',
      key: 'system_timestamp'
    },
    {
      title: 'Merchant ID',
      dataIndex: 'merchant_id',
      key: 'merchant_id'
    },
    {
      title: 'Customer Code',
      dataIndex: 'customer_code',
      key: 'customer_code'
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount'
    },
    {
      title: 'Client Timestamp',
      dataIndex: 'client_timestamp',
      key: 'client_timestamp'
    },
    {
      title: 'Original Timestamp',
      dataIndex: 'original_timestamp',
      key: 'original_timestamp'
    },
    {
      title: 'Bank',
      dataIndex: 'bank',
      key: 'bank'
    },
    {
      title: 'Dest Bank Account',
      dataIndex: 'dest_bank_account',
      key: 'dest_bank_account'
    },
    {
      title: 'Dest Account Name',
      dataIndex: 'dest_account_name',
      key: 'dest_account_name'
    },
    {
      title: 'Transaction ID',
      dataIndex: 'transaction_id',
      key: 'transaction_id'
    },
    {
      title: 'Fee',
      dataIndex: 'fee',
      key: 'fee'
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
      title: 'Notes 2',
      dataIndex: 'notes_2',
      key: 'notes_2'
    },
    {
      title: 'Notes 3',
      dataIndex: 'notes_3',
      key: 'notes_3'
    },
    {
      title: 'Agent Assign',
      dataIndex: 'agent_assign',
      key: 'agent_assign'
    },
    {
      title: 'Status Assign',
      dataIndex: 'status_assign',
      key: 'status_assign'
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action'
    }
  ]
  return { column: tmpDataColumn, records: a }
}

export default dataWithdrawAssignmentTableData
