import React from 'react'
import a from '../../../tmpdata/db.json'
export const dataSettlementTableData = () => {
  let tmpDataColumn = [
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
      title: 'Type',
      dataIndex: 'type',
      key: 'type'
    },
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user'
    },
    {
      title: 'Timestamp',
      dataIndex: 'timestamp',
      key: 'timestamp'
    },
    {
      title: 'Bank',
      dataIndex: 'bank',
      key: 'bank'
    },
    {
      title: 'Bank Account',
      dataIndex: 'bank_account',
      key: 'bank_account'
    },
    {
      title: 'Account Name',
      dataIndex: 'account_name',
      key: 'account_name'
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
      title: 'Update',
      dataIndex: 'update',
      key: 'update'
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
    }
  ]
  return {
    column: tmpDataColumn,
    records: a
  }
}

export default dataSettlementTableData
