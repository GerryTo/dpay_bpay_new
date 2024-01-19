import React, { useState } from 'react'
import a from '../../../tmpdata/accountreportSMS.json'

const dataAccountReportSMS = () => {
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
      title: 'Cash In',
      dataIndex: 'cash_in',
      key: 'cash_in'
    },
    {
      title: 'Deposit',
      dataIndex: 'deposit',
      key: 'deposit'
    },
    {
      title: 'B2B Received',
      dataIndex: 'b2b_received',
      key: 'b2b_received'
    },
    {
      title: 'B2B Send',
      dataIndex: 'b2b_send',
      key: 'b2b_send'
    }
  ]
  return {
    column: tmpDataColumn,
    records: a
  }
}

export default dataAccountReportSMS
