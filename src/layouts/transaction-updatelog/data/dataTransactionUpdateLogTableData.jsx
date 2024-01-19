import React from 'react'
import a from '../../../tmpdata/db.json'
const dataTransactionUpdateLogTableData = () => {
  let tmpDataColumn = [
    {
      title: 'Timestamp',
      dataIndex: 'timestamp',
      key: 'timestamp'
    },
    {
      title: 'Trans ID',
      dataIndex: 'trans_id',
      key: 'trans_id'
    },
    {
      title: 'Status Requested',
      dataIndex: 'status_requested',
      key: 'status_requested'
    },
    {
      title: 'Amount Requested',
      dataIndex: 'amount_requested',
      key: 'amount_requested'
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status'
    }
  ]
  return { column: tmpDataColumn, records: a }
}

export default dataTransactionUpdateLogTableData
