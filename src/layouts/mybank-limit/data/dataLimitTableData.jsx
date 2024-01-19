import React, { useState } from 'react'
import a from '../../../tmpdata/banklimit.json'

const dataLimitTableData = () => {
  const [isLoading, setIsloading] = useState(false)
  let tmpDataColumn = [
    {
      title: 'Account No.',
      dataIndex: 'acc_no',
      key: 'acc_no'
    },
    {
      title: 'Account Name',
      dataIndex: 'acc_name',
      key: 'acc_name'
    },
    {
      title: 'Bank',
      dataIndex: 'bank',
      key: 'bank'
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type'
    },
    {
      title: 'Is Active',
      dataIndex: 'is_active',
      key: 'is_active'
    },
    {
      title: 'Daily Deposit Limit',
      dataIndex: 'daily_deposit_limit',
      key: 'daily_deposit_limit'
    },
    {
      title: 'Current Transaction',
      dataIndex: 'current_transaction',
      key: 'current_transaction'
    }
  ]
  return {
    column: tmpDataColumn,
    records: a
  }
}

export default dataLimitTableData
