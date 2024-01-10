import React from 'react'
import a from '../../../tmpdata/db.json'
const dataTransactionResubmitTableData = () => {
  let tmpDataColumn = [
    {
      title: 'Resubmit Time',
      dataIndex: 'resubmit_time',
      key: 'resubmit_time'
    },
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
      title: 'Trx Customer Phone',
      dataIndex: 'trx_customer_phone',
      key: 'trx_customer_phone'
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
      title: 'Trans. Amount',
      dataIndex: 'trans_amount',
      key: 'trans_amount'
    },
    {
      title: 'Message',
      dataIndex: 'message',
      key: 'message'
    },
    {
      title: 'Transaction Type',
      dataIndex: 'transaction_type',
      key: 'transaction_type'
    },
    {
      title: 'SMS ID',
      dataIndex: 'sms_id',
      key: 'sms_id'
    },
    {
      title: 'Future Trx ID',
      dataIndex: 'future_trx_id',
      key: 'future_trx_id'
    },
    {
      title: 'Suspect Reason',
      dataIndex: 'suspect_reason',
      key: 'suspect_reason'
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
    }
  ]
  return { column: tmpDataColumn, records: a }
}

export default dataTransactionResubmitTableData
