import React, { useState } from 'react'
import a from '../../../tmpdata/bankbalance.json'

const dataBalanceTableData = () => {
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
      title: 'Balance',
      dataIndex: 'balance',
      key: 'balance'
    },
    {
      title: 'Daily',
      dataIndex: 'daily',
      key: 'daily'
    },
    {
      title: 'Daily Withdrawal Limit',
      dataIndex: 'daily_withdrawal_limit',
      key: 'daily_withdrawal_limit'
    },
    {
      title: 'Daily Withdrawal',
      dataIndex: 'daily_withdrawal',
      key: 'daily_withdrawal'
    }
  ]
  return {
    column: tmpDataColumn,
    records: a
  }
}

export default dataBalanceTableData
