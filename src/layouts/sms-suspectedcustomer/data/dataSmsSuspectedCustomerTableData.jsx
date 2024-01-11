import React from 'react'
import a from '../../../tmpdata/db.json'
const dataSmsSuspectedCustomerTableData = () => {
  let tmpDataColumn = [
    {
      title: 'Timestamp',
      dataIndex: 'timestamp',
      key: 'timestamp'
    },
    {
      title: 'Customer Phone',
      dataIndex: 'customer_phone',
      key: 'customer_phone'
    }
  ]
  return {
    column: tmpDataColumn,
    records: a
  }
}

export default dataSmsSuspectedCustomerTableData
