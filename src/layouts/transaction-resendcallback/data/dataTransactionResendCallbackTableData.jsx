import React from 'react'
import a from '../../../tmpdata/db.json'
const dataTransactionResendCallback = () => {
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
      title: 'Trans ID',
      dataIndex: 'trans_id',
      key: 'trans_id'
    },
    {
      title: 'Callback Status',
      dataIndex: 'callback_status',
      key: 'callback_status'
    }
  ]
  return { column: tmpDataColumn, records: a }
}

export default dataTransactionResendCallback
