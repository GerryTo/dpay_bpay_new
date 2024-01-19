import React, { useState } from 'react'
import a from '../../../tmpdata/db.json'

const dataCrawlerAutomationWithdrawalTableData = () => {
  const [isLoading, setIsloading] = useState(false)
  let tmpDataColumn = [
    {
      title: 'Future Trx ID',
      dataIndex: 'future_trx_id',
      key: 'future_trx_id'
    },
    {
      title: 'Insert Date',
      dataIndex: 'insert_date',
      key: 'insert_date'
    },
    {
      title: 'Complete Date',
      dataIndex: 'complete_date',
      key: 'complete_date'
    },
    {
      title: 'Merchant',
      dataIndex: 'merchant',
      key: 'merchant'
    },
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
      title: 'Src Acc No',
      dataIndex: 'src_acc_no',
      key: 'src_acc_no'
    },
    {
      title: 'Src Acc Name',
      dataIndex: 'src_acc_name',
      key: 'src_acc_name'
    },
    {
      title: 'Dst Acc No',
      dataIndex: 'dst_acc_no',
      key: 'dst_acc_no'
    },
    {
      title: 'Dst Acc Name',
      dataIndex: 'dst_acc_name',
      key: 'dst_acc_name'
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

export default dataCrawlerAutomationWithdrawalTableData
