import React from 'react'
import TransactionByAccountHistory from '../../../tmpdata/transactionbyaccounthistory.json'
export const dataTransactionByAccountHistoryTableData = () => {
  let tmpDataColumns = [
    {
      dataIndex: 'futuretrx',
      title: 'Future Trx ID'
    },
    {
      dataIndex: 'date',
      title: 'Date'
    },
    {
      dataIndex: 'merchant_code',
      title: 'Merchant Code'
    },
    {
      dataIndex: 'status',
      title: 'Status'
    },
    {
      dataIndex: 'customer_code',
      title: 'Customer Code'
    },
    {
      dataIndex: 'bank',
      title: 'Bank'
    },
    {
      dataIndex: 'debit',
      title: 'Debit'
    },
    {
      dataIndex: 'credit',
      title: 'Credit'
    },
    {
      dataIndex: 'trans_type',
      title: 'Trans Type'
    },
    {
      dataIndex: 'status',
      title: 'Status'
    },
    {
      dataIndex: 'callback_status',
      title: 'Callback Status'
    },
    {
      dataIndex: 'fee',
      title: 'Fee'
    },
    {
      dataIndex: 'notes',
      title: 'Notes'
    },
    {
      dataIndex: 'notes_2',
      title: 'Notes 2'
    },
    {
      dataIndex: 'notes_3',
      title: 'Notes 3'
    },
    {
      dataIndex: 'sms_phone',
      title: 'Sms Phone'
    },
    {
      dataIndex: 'sms_agent',
      title: 'Sms Agent'
    },
    {
      dataIndex: 'trans_id',
      title: 'Trans ID'
    },
    {
      dataIndex: 'alias',
      title: 'Alias'
    },
    {
      dataIndex: 'acc_source',
      title: 'Acc Source'
    },
    {
      dataIndex: 'acc_source_name',
      title: 'Acc Source Name'
    },
    {
      dataIndex: 'acc_dest',
      title: 'Acc Dest'
    },
    {
      dataIndex: 'acc_dest_name',
      title: 'Acc Dest Name'
    },
    {
      dataIndex: 'server_name',
      title: 'Server Name'
    },
    {
      dataIndex: 'server_url',
      title: 'Server URL'
    },
    {
      dataIndex: 'receipt_id',
      title: 'Receipt ID'
    },
    {
      dataIndex: 'memo',
      title: 'Memo'
    },
    {
      dataIndex: 'action',
      title: 'Action'
    }
  ]
  return {
    columns: tmpDataColumns,
    records: TransactionByAccountHistory
  }
}

export default dataTransactionByAccountHistoryTableData
