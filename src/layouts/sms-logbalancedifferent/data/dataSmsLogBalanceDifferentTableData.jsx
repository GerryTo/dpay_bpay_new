import React from 'react'
import a from '../../../tmpdata/db.json'
export const dataSmsLogBalanceDifferentTableData = () => {
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
      title: 'Alias',
      dataIndex: 'alias',
      key: 'alias'
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
      title: 'Suspected Reason',
      dataIndex: 'suspected_reason',
      key: 'suspected_reason'
    },

    {
      title: 'Future Trx ID',
      dataIndex: 'future_trx_id',
      key: 'future_trx_id'
    },
    {
      title: 'Balance',
      dataIndex: 'balance',
      key: 'balance'
    },
    {
      title: 'Balance Calculate',
      dataIndex: 'balance_calculate',
      key: 'balance_calculate'
    },
    {
      title: 'Balance Different',
      dataIndex: 'balance_different',
      key: 'balance_different'
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

export default dataSmsLogBalanceDifferentTableData
