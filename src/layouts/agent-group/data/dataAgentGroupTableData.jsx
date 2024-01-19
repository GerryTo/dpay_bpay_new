import React, { useState } from 'react'
import a from '../../../tmpdata/agentgroup.json'

const dataAgentGroupTableData = () => {
  const [isLoading, setIsloading] = useState(false)
  let tmpDataColumn = [
    {
      title: 'Group Name',
      dataIndex: 'group_name',
      key: 'group_name'
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

export default dataAgentGroupTableData
