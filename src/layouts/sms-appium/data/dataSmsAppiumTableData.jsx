import React from 'react'
import a from '../../../tmpdata/db.json'
export const dataSmsAppiumTableData = () => {
  let tmpDataColumn = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date'
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title'
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
      title: 'Account',
      dataIndex: 'account',
      key: 'account'
    },
    {
      title: 'Trx ID',
      dataIndex: 'trx_id',
      key: 'trx_id'
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount'
    },
    {
      title: 'Future Trx ID',
      dataIndex: 'future_trx_id',
      key: 'future_trx_id'
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status'
    },
    {
      title: 'Status Transaction',
      dataIndex: 'status_transaction',
      key: 'status_transaction'
    }
  ]
  return {
    column: tmpDataColumn,
    records: a
  }
}

export default dataSmsAppiumTableData
