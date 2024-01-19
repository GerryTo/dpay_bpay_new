import React from 'react'
import a from '../../../tmpdata/db.json'
export const dataSmsDuplicateTableData = () => {
  let tmpDataColumn = [
    {
      title: 'Trx ID',
      dataIndex: 'trx_id',
      key: 'trx_id'
    },
    {
      title: 'Duplicate Count',
      dataIndex: 'duplicate_count',
      key: 'duplicate_count'
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action'
    }
  ]
  return {
    column: tmpDataColumn,
    records: a
  }
}

export default dataSmsDuplicateTableData
