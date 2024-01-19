import React from 'react'
import a from '../../../tmpdata/db.json'
export const dataSmsCriteriaNotMatchingIdTableData = () => {
  let tmpDataColumn = [
    {
      title: 'Timestamp',
      dataIndex: 'timestamp',
      key: 'timestamp'
    },
    {
      title: 'Trx ID',
      dataIndex: 'trx_id',
      key: 'trx_id'
    },
    {
      title: 'Trans Phone Number',
      dataIndex: 'trans_phone_number',
      key: 'trans_phone_number'
    },
    {
      title: 'SMS Phone Number',
      dataIndex: 'sms_phone_number',
      key: 'sms_phone_number'
    },
    {
      title: 'Trans Amount',
      dataIndex: 'trans_amount',
      key: 'trans_amount'
    },
    {
      title: 'SMS Amount',
      dataIndex: 'sms_amount',
      key: 'sms_amount'
    },
    {
      title: 'Suspected Reason',
      dataIndex: 'suspected_reason',
      key: 'suspected_reason'
    }
  ]
  return {
    column: tmpDataColumn,
    records: a
  }
}

export default dataSmsCriteriaNotMatchingIdTableData
