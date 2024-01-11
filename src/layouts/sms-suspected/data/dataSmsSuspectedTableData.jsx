import React from 'react'
import a from '../../../tmpdata/db.json'
export const dataSmsSuspectedTableData = () => {
  let tmpDataColumn = [
    {
      title: 'Timestamp',
      dataIndex: 'timestamp',
      key: 'timestamp'
    },
    {
      title: 'From',
      dataIndex: 'from',
      key: 'from'
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username'
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone_number',
      key: 'phone_number'
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
      title: 'Service Center',
      dataIndex: 'service_center',
      key: 'service_center'
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount'
    },
    {
      title: 'Message',
      dataIndex: 'message',
      key: 'message'
    },
    {
      title: 'Future Trx ID',
      dataIndex: 'future_trx_id',
      key: 'future_trx_id'
    },
    {
      title: 'Balance',
      dataIndex: 'balance',
      key: 'balance'
    },
    {
      title: 'Balance Calculate',
      dataIndex: 'balance_calculate',
      key: 'balance_calculate'
    },
    {
      title: 'Balance Different',
      dataIndex: 'balance_different',
      key: 'balance_different'
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

export default dataSmsSuspectedTableData
