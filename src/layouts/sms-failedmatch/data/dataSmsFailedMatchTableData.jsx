import React from 'react'
import a from '../../../tmpdata/db.json'
export const dataSmsFailedMatchTableData = () => {
  let tmpDataColumn = [
    {
      title: 'Future Trx ID',
      dataIndex: 'future_trx_id',
      key: 'future_trx_id'
    },
    {
      title: 'Timestamp',
      dataIndex: 'timestamp',
      key: 'timestamp'
    },
    {
      title: 'Merchant',
      dataIndex: 'merchant',
      key: 'merchant'
    },
    {
      title: 'Transaction ID',
      dataIndex: 'transaction_id',
      key: 'transaction_id'
    },
    {
      title: 'Bank',
      dataIndex: 'bank',
      key: 'bank'
    },
    {
      title: 'Trx ID',
      dataIndex: 'trx_id',
      key: 'trx_id'
    },
    {
      title: 'Customer Phone',
      dataIndex: 'customer_phone',
      key: 'customer_phone'
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount'
    },
    {
      title: 'Bank (SMS)',
      dataIndex: 'bank',
      key: 'bank'
    },
    {
      title: 'Timestamp (SMS)',
      dataIndex: 'timestamp',
      key: 'timestamp'
    },
    {
      title: 'Customer Phone (SMS)',
      dataIndex: 'customer_phone',
      key: 'customer_phone'
    },
    {
      title: 'Service Center (SMS)',
      dataIndex: 'service_center',
      key: 'service_center'
    },
    {
      title: 'Amount (SMS)',
      dataIndex: 'amount',
      key: 'amount'
    },
    {
      title: 'Reason',
      dataIndex: 'reason',
      key: 'reason'
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action'
    }
  ]
  return {
    column: tmpDataColumn,
    records: a
  }
}

export default dataSmsFailedMatchTableData
