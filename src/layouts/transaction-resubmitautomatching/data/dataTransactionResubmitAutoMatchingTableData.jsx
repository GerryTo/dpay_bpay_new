import React from 'react'
import a from '../../../tmpdata/db.json'
const dataTransactionResubmitAutoMatchingTableData = () => {
  let tmpDataColumn = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date'
    },
    {
      title: 'Bank',
      dataIndex: 'bank',
      key: 'bank'
    },
    {
      title: 'Customer Account',
      dataIndex: 'customer_account',
      key: 'customer_account'
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
      title: 'User',
      dataIndex: 'user',
      key: 'user'
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone_number',
      key: 'phone_number'
    },
    {
      title: 'Agent Account No.',
      dataIndex: 'agent_account_no',
      key: 'agent_account_no'
    }
  ]
  return { column: tmpDataColumn, records: a }
}

export default dataTransactionResubmitAutoMatchingTableData
