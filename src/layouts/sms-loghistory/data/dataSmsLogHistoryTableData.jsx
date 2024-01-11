import React from 'react'
import a from '../../../tmpdata/db.json'
export const dataSmsLogHistoryTableData = () => {
  let tmpDataColumn = [
    {
      title: 'Timestamp',
      dataIndex: 'timestamp',
      key: 'timestamp'
    },
    {
      title: 'Timestamp BDT',
      dataIndex: 'timestamp_bdt',
      key: 'timestamp_bdt'
    },
    {
      title: 'From',
      dataIndex: 'from',
      key: 'from'
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username'
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone_number',
      key: 'phone_number'
    },
    {
      title: 'Bank',
      dataIndex: 'bank',
      key: 'bank'
    },
    {
      title: 'Trx ID',
      dataIndex: 'trx_id',
      key: 'trx_id'
    },
    {
      title: 'Customer Phone',
      dataIndex: 'customer_phone',
      key: 'customer_phone'
    },
    {
      title: 'Service Center',
      dataIndex: 'service_center',
      key: 'service_center'
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount'
    },
    {
      title: 'Message',
      dataIndex: 'message',
      key: 'message'
    },
    {
      title: 'Future Trx ID',
      dataIndex: 'future_trx_id',
      key: 'future_trx_id'
    },
    {
      title: 'Match Manually',
      dataIndex: 'match_manually',
      key: 'match_manually'
    },
    {
      title: 'Match Date',
      dataIndex: 'match_date',
      key: 'match_date'
    }
  ]
  return {
    column: tmpDataColumn,
    records: a
  }
}

export default dataSmsLogHistoryTableData
