import React from 'react'
import a from '../../../../tmpdata/db.json'
export const dataModalDetail = () => {
  
  let tmpDataColumns = [
    {
      dataIndex: 'futuretrx',
      title: 'Future Trx ID'
    },
    {
      dataIndex: 'date',
      title: 'Date'
    },
    {
      dataIndex: 'bank',
      title: 'Bank'
    },
    {
      dataIndex: 'src_acc_no',
      title: 'Src Acc No'
    },
    {
      dataIndex: 'amount',
      title: 'Amount'
    },
    {
      dataIndex: 'transaction_id',
      title: 'Transaction ID'
    },
    {
      dataIndex: 'notes_3',
      title: 'Notes3'
    },
    {
      dataIndex: 'customer_phone',
      title: 'Customer Phone'
    },
    {
      dataIndex: 'agent_phone',
      title: 'Agent Phone'
    },
    {
      dataIndex: 'user',
      title: 'User'
    },
    {
      dataIndex: 'alias',
      title: 'Alias'
    },
    {
      dataIndex: 'agent_name',
      title: 'Agent Name'
    }  ]
  return {
    columns: tmpDataColumns,
    records: a
  }
}

export default dataModalDetail
