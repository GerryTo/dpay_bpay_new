import React from 'react'
import a from '../../../tmpdata/db.json'
const dataTransactionSuspectedTableData = () => {
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
      title: 'Sms Phone',
      dataIndex: 'sms_phone',
      key: 'sms_phone'
    },
    {
      title: 'Sms Agent',
      dataIndex: 'sms_agent',
      key: 'sms_agent'
    },
    {
      title: 'Sms Matched',
      dataIndex: 'sms_matched',
      key: 'sms_matched'
    },
    {
      title: 'Sms Date',
      dataIndex: 'sms_date',
      key: 'sms_date'
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action'
    }
  ]
  return { column: tmpDataColumn, records: a }
}

export default dataTransactionSuspectedTableData
