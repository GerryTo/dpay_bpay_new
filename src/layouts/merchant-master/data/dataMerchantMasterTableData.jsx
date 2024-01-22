import React, { useState } from 'react'
import a from '../../../tmpdata/merchantmaster.json'
import { Button, Space } from 'antd'
const dataMerchantMasterTableData = () => {
  const [isLoading, setIsloading] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const editModal = record => {
    setIsEditModalOpen(true)
  }
  let tmpDataColumn = [
    {
      title: 'Merchant Code',
      dataIndex: 'merchant_code',
      key: 'merchant_code'
    },
    {
      title: 'Merchant Name',
      dataIndex: 'merchant_name',
      key: 'merchant_name'
    },
    {
      title: 'Timezone',
      dataIndex: 'timezone',
      key: 'timezone'
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: record => (
        <>
        <Space direction='horizontal'>
          <Button type='primary' onClick={() => editModal(record)}>Edit</Button>
          <Button danger onClick="">Delete</Button>
        </Space>
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

export default dataMerchantMasterTableData
