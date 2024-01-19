import React, { useState } from 'react'
import a from '../../../tmpdata/report.json'

const dataMonthlyTableData = () => {
  const [isLoading, setIsloading] = useState(false)
  let tmpDataColumn = [
    {
      title: 'Merchant Code',
      dataIndex: 'merchant_code',
      key: 'merchant_code'
    },
    {
      title: 'Month',
      dataIndex: 'month',
      key: 'month'
    },
    {
      title: 'Opening Balance',
      dataIndex: 'opening_balance',
      key: 'opening_balance'
    },
    {
      title: 'Total Deposit',
      dataIndex: 'total_deposit',
      key: 'total_deposit'
    },
    {
      title: 'Bropay Fee',
      dataIndex: 'bropay_fee',
      key: 'bropay_fee'
    },
    {
      title: 'Commission',
      dataIndex: 'comission',
      key: 'comission'
    },
    {
      title: 'Total Top Up',
      dataIndex: 'total_topup',
      key: 'total_topup'
    },
    {
      title: 'Total Settlement',
      dataIndex: 'total_settlement',
      key: 'total_settlement'
    },
    {
      title: 'Closing Balance',
      dataIndex: 'closing_balance',
      key: 'closing_balance'
    }
  ]
  return {
    column: tmpDataColumn,
    records: a
  }
}

export default dataMonthlyTableData
