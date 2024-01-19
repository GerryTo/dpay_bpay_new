import React, { useState } from 'react'
import a from '../../../tmpdata/db.json'

const dataCrawlerErrorLogTableData = () => {
  const [isLoading, setIsloading] = useState(false)
  let tmpDataColumn = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date'
    },
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user'
    },

    {
      title: 'Account No',
      dataIndex: 'account_no',
      key: 'account_no'
    },
    {
      title: 'Bank',
      dataIndex: 'bank',
      key: 'bank'
    },
    {
      title: 'Error Log',
      dataIndex: 'error_log',
      key: 'error_log'
    }
  ]
  return {
    column: tmpDataColumn,
    records: a
  }
}

export default dataCrawlerErrorLogTableData
