import React from 'react'
import a from '../../../tmpdata/db.json'

const dataDepositQueueAlert = () => {
  let tmpDataColumn = [
    {
      title: 'Account No.',
      dataIndex: 'account_no',
      key: 'account_no'
    },
    {
      title: 'Account Name',
      dataIndex: 'account_name',
      key: 'account_name'
    },
    {
      title: 'Bank',
      dataIndex: 'bank',
      key: 'bank'
    },
    {
      title: 'Pending Transaction',
      dataIndex: 'pending_transaction',
      key: 'pending_transaction'
    }
  ]
  return { column: tmpDataColumn, records: a }
}

export default dataDepositQueueAlert
