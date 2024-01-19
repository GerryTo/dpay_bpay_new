import React, { useState } from 'react'
import a from '../../../tmpdata/accountreportdaily.json'

const dataAccountReportDaily = () => {
  const [isLoading, setIsloading] = useState(false)
  let tmpDataColumn = [
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
      title: 'Account No',
      dataIndex: 'account_no',
      key: 'account_no'
    },
    {
      title: 'Account Name',
      dataIndex: 'account_name',
      key: 'account_name'
    },
    {
      title: 'Deposit',
      dataIndex: 'deposit',
      key: 'deposit'
    },
    {
      title: 'Withdraw',
      dataIndex: 'withdraw',
      key: 'withdraw'
    },
    {
      title: 'Adjustment Deposit',
      dataIndex: 'adj_deposit',
      key: 'adj_deposit'
    },
    {
      title: 'Adjustment Withdraw',
      dataIndex: 'adj_withdraw',
      key: 'adj_withdraw'
    },
    {
      title: 'Total Deposit',
      dataIndex: 'total_deposit',
      key: 'total_deposit'
    },
    {
      title: 'Total Withdraw',
      dataIndex: 'total_withdraw',
      key: 'total_withdraw'
    }
  ]
  return {
    column: tmpDataColumn,
    records: a
  }
}

export default dataAccountReportDaily
