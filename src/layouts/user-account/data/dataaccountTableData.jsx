import React, { useState } from 'react'
import TransactionByAccountHistory from '../../../tmpdata/account.json'
import { Button, Space } from 'antd'
export const dataAccountTableData = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const editModal = record => {
    setIsEditModalOpen(true)
  }

  let tmpDataColumns = [
    {
      dataIndex: 'login',
      title: 'Login'
    },
    {
      dataIndex: 'active',
      title: 'Active'
    },
    {
      dataIndex: 'type',
      title: 'Type'
    },
    {
      dataIndex: 'merchant',
      title: 'Merchant'
    },
    {
      dataIndex: 'phone_number',
      title: 'Phone Number'
    },
    {
      dataIndex: 'agent',
      title: 'Agent'
    },
    {
      dataIndex: 'alias',
      title: 'Alias'
    },
    {
      dataIndex: 'action',
      title: 'Action',
      render: record => (
        <>
        <Space direction='horizontal'>
          <Button type='primary' onClick={() => editModal(record)}>Edit</Button>
          <Button danger>Delete</Button>
        </Space>
        </>
      )
    }
  ]
  return {
    columns: tmpDataColumns,
    records: TransactionByAccountHistory,
    isEditModalOpen,
    setIsEditModalOpen
  }
}

export default dataAccountTableData
