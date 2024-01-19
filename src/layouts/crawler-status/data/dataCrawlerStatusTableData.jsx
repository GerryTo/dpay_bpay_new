import React, { useState } from 'react'
import a from '../../../tmpdata/db.json'

const dataCrawlerStatusTableData = () => {
  const [isLoading, setIsloading] = useState(false)
  let tmpDataColumn = [
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user'
    },
    {
      title: 'Bank',
      dataIndex: 'bank',
      key: 'bank'
    },
    {
      title: 'System',
      dataIndex: 'system',
      key: 'system'
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status'
    },
    {
      title: 'Heart Beat',
      dataIndex: 'heart_beat',
      key: 'heart_beat'
    },
    {
      title: 'Note',
      dataIndex: 'note',
      key: 'note'
    }
  ]
  return {
    column: tmpDataColumn,
    records: a
  }
}

export default dataCrawlerStatusTableData
