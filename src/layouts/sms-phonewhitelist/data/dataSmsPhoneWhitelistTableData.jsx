import React from 'react'
import a from '../../../tmpdata/db.json'
export const dataSmsPhoneWhitelistTableData = () => {
  let tmpDataColumn = [
    {
      title: 'Phone Number',
      dataIndex: 'phone_number',
      key: 'phone_number'
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: 'Active',
      dataIndex: 'active',
      key: 'active'
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

export default dataSmsPhoneWhitelistTableData
