import React, { useState } from 'react'
import a from '../../../tmpdata/db.json'
import { Button } from 'antd'
export const dataSmsServiceCenterWhitelistTableData = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const editModal= record => {
    setIsEditModalOpen(true)
  }
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
      key: 'action',
      render: record => (
        <>
        <Button type='primary' onClick={() => editModal(record)}>Edit</Button>
        </>
      )
    }
  ]
  return {
    column: tmpDataColumn,
    records: a,
    isEditModalOpen,
    setIsEditModalOpen
  }
}

export default dataSmsServiceCenterWhitelistTableData
