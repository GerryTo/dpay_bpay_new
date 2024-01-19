import React from 'react'
import a from '../../../tmpdata/db.json'
const dataTransactionLogTableData = () => {
  let tmpDataColumn = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date'
    },
    {
      title: 'Filter',
      dataIndex: 'filter',
      key: 'filter'
    },
    {
      title: 'Number Of Transaction',
      dataIndex: 'number_of_transaction',
      key: 'number_of_transaction'
    },
    {
      title: 'Success Transaction',
      dataIndex: 'success_transaction',
      key: 'success_transaction'
    },
    {
      title: 'Is Finished',
      dataIndex: 'is_finished',
      key: 'is_finished'
    },
    {
      title: 'Finished Date',
      dataIndex: 'finished_date',
      key: 'finished_date'
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action'
    }
  ]
  return { column: tmpDataColumn, records: a }
}

export default dataTransactionLogTableData
