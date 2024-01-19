import React from 'react'
import a from '../../../tmpdata/db.json'
const dataWithdrawListDataTable = () => {
  let tmpDataColumn = [
    {
      title: 'Future ID',
      dataIndex: 'future_id',
      key: 'future_id'
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
      title: 'Source Bank',
      dataIndex: 'source_bank',
      key: 'source_bank'
    },
    {
      title: 'Source Bank Account',
      dataIndex: 'source_bank_account',
      key: 'source_bank_account'
    },
    {
      title: 'Source Bank Account Name',
      dataIndex: 'source_bank_account_name',
      key: 'source_bank_account_name'
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
      title: 'Action',
      dataIndex: 'action',
      key: 'action'
    }
  ]
  return { column: tmpDataColumn, records: a }
}

export default dataWithdrawListDataTable
