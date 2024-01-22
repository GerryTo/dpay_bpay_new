import React, { useState } from 'react'
import a from '../../../tmpdata/db.json'
import { Button } from 'antd'
export const dataSmsPhoneWhitelistTableData = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const editModal = record => {
    setIsEditModalOpen(true)
  }
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

export default dataSmsPhoneWhitelistTableData
