import React from 'react'
import a from '../../../tmpdata/db.json'
export const dataSmsReportTableData = () => {
  let tmpDataColumn = [
    {
      title: 'Phone Number',
      dataIndex: 'phone_number',
      key: 'phone_number'
    },
    {
      title: 'No. Of SMS',
      dataIndex: 'no_sms',
      key: 'no_sms'
    },
    {
      title: 'Total Amount',
      dataIndex: 'amount',
      key: 'amount'
    }
  ]
  return {
    column: tmpDataColumn,
    records: a
  }
}

export default dataSmsReportTableData
