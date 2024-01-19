import React from 'react'
import a from '../../../tmpdata/db.json'
const dataTransactionPendingTableData = () => {
  let tmpDataColumn = [
    {
      title: 'Future Trx ID',
      dataIndex: 'future_trx_id',
      key: 'future_trx_id'
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date'
    },
    {
      title: 'Merchant Code',
      dataIndex: 'merchant_code',
      key: 'merchant_code'
    },
    {
      title: 'Customer Code',
      dataIndex: 'customer_code',
      key: 'customer_code'
    },
    {
      title: 'Bank',
      dataIndex: 'bank',
      key: 'bank'
    },
    {
      title: 'Debit',
      dataIndex: 'debit',
      key: 'debit'
    },
    {
      title: 'Credit',
      dataIndex: 'credit',
      key: 'credit'
    },
    {
      title: 'Trans Type',
      dataIndex: 'trans_type',
      key: 'trans_type'
    },

    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status'
    },
    {
      title: 'Callback Status',
      dataIndex: 'callback_status',
      key: 'callback_status'
    },
    {
      title: 'Fee',
      dataIndex: 'fee',
      key: 'fee'
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
      title: 'Trans ID',
      dataIndex: 'trans_id',
      key: 'trans_id'
    },
    {
      title: 'Alias',
      dataIndex: 'alias',
      key: 'alias'
    },
    {
      title: 'Acc Source',
      dataIndex: 'acc_source',
      key: 'acc_source'
    },
    {
      title: 'Acc Source Name',
      dataIndex: 'acc_source_name',
      key: 'acc_source_name'
    },
    {
      title: 'Acc Dest',
      dataIndex: 'acc_dest',
      key: 'acc_dest'
    },
    {
      title: 'Acc Dest Name',
      dataIndex: 'acc_dest_name',
      key: 'acc_dest_name'
    },
    {
      title: 'Server Name',
      dataIndex: 'server_name',
      key: 'server_name'
    },
    {
      title: 'Server URL',
      dataIndex: 'server_url',
      key: 'server_url'
    },
    {
      title: 'Receipt ID',
      dataIndex: 'receipt_id',
      key: 'receipt_id'
    },
    {
      title: 'Memo',
      dataIndex: 'memo',
      key: 'memo'
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action'
    }
  ]
  return { column: tmpDataColumn, records: a }
}

export default dataTransactionPendingTableData
