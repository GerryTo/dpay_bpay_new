import React from 'react'
import a from '../../../tmpdata/db.json'
const dataWithdrawSettingTableData = () => {
  let tmpDataColumn = [
    {
      title: 'Bank Code',
      dataIndex: 'bank_code',
      key: 'bank_code'
    },
    {
      title: 'Is Enabled',
      dataIndex: 'is_enabled',
      key: 'is_enabled'
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action'
    }
  ]
  return { column: tmpDataColumn, records: a }
}

export default dataWithdrawSettingTableData
