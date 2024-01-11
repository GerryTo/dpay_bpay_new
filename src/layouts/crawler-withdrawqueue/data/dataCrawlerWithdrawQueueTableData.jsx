import React, { useState } from 'react'
import a from '../../../tmpdata/db.json'

const dataCrawlerWithdrawQueueTableData = () => {
  const [isLoading, setIsloading] = useState(false)
  let tmpDataColumn = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date'
    },
    {
      title: 'Future Trx ID',
      dataIndex: 'future_trx_id',
      key: 'future_trx_id'
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
      title: 'Sent Mqtt',
      dataIndex: 'sent_mqtt',
      key: 'sent_mqtt'
    },
    {
      title: 'Received Mqtt',
      dataIndex: 'received_mqtt',
      key: 'received_mqtt'
    },
    {
      title: 'Done Mqtt',
      dataIndex: 'done_mqtt',
      key: 'done_mqtt'
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

export default dataCrawlerWithdrawQueueTableData
