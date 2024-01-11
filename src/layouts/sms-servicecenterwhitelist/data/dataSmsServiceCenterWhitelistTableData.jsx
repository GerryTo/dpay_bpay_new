import React from 'react'
import a from '../../../tmpdata/db.json'
export const dataSmsServiceCenterWhitelistTableData = () => {
  let tmpDataColumn = [
    {
      title: 'Service Center',
      dataIndex: 'service_center',
      key: 'service_center'
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

export default dataSmsServiceCenterWhitelistTableData
