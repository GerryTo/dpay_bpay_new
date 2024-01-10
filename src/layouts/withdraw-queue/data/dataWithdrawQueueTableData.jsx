import React from 'react'
import a from '../../../tmpdata/db.json'
const dataWithdrawQueueTableData = () => {
  let tmpDataColumn = [
    {
      title: 'Queue ID',
      dataIndex: 'queue_id',
      key: 'queue_id'
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
      title: 'Transaction ID',
      dataIndex: 'transaction_id',
      key: 'transaction_id'
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status'
    },
    {
      title: 'Message',
      dataIndex: 'message',
      key: 'message'
    },
    {
      title: 'Future ID',
      dataIndex: 'future_id',
      key: 'future_id'
    },
    {
      title: 'Parent Future ID',
      dataIndex: 'parent_future_id',
      key: 'parent_future_id'
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type'
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action'
    }
  ]
  return { column: tmpDataColumn, records: a }
}

export default dataWithdrawQueueTableData
