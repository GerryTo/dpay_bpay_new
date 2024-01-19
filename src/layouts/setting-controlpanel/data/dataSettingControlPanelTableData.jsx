import React, { useState } from 'react'
import a from '../../../tmpdata/db.json'

const dataSettingControlPanelTableData = () => {
  const [isLoading, setIsloading] = useState(false)
  let tmpDataColumn = [
    {
      title: 'Timestamp',
      dataIndex: 'timestamp',
      key: 'timestamp'
    },
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user'
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: 'IP',
      dataIndex: 'ip',
      key: 'ip'
    }
  ]
  return {
    column: tmpDataColumn,
    records: a
  }
}

export default dataSettingControlPanelTableData
