import React from 'react'
import a from '../../../tmpdata/agentreporttransaction.json'
const dataAgentReportTransactionDataTable = () => {
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
      title: 'Complete Date',
      dataIndex: 'complete_date',
      key: 'complete_date'
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
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount'
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
      title: 'Receipt ID',
      dataIndex: 'receipt_id',
      key: 'receipt_id'
    },
    {
      title: 'Memo',
      dataIndex: 'memo',
      key: 'memo'
    }
  ]
  return { column: tmpDataColumn, records: a }
}

export default dataAgentReportTransactionDataTable
