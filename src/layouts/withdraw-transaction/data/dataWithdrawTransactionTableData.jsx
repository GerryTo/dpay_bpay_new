import React from 'react'
import a from '../../../tmpdata/merchanttransaction.json'
const dataWithdrawTransactionTableData = () => {
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
      title: 'Original Date',
      dataIndex: 'original_date',
      key: 'original_date'
    },
    {
      title: 'Insert Date',
      dataIndex: 'insert_date',
      key: 'insert_date'
    },
    {
      title: 'Account No.',
      dataIndex: 'account_no',
      key: 'account_no'
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
      title: 'IP',
      dataIndex: 'ip',
      key: 'ip'
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
      title: 'Reference',
      dataIndex: 'reference',
      key: 'reference'
    }
  ]
  return { column: tmpDataColumn, records: a }
}

export default dataWithdrawTransactionTableData
