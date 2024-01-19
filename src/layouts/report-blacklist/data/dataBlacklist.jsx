import React, { useState } from 'react'
import a from '../../../tmpdata/blacklist.json'
import { Button, Space } from 'antd'

const dataBlacklist = () => {
  const [isLoading, setIsloading] = useState(false)
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false)
  const detailModal = record => {
    setIsDetailModalOpen(true)
  }
  let tmpDataColumn = [
    {
      title: 'Merchant Code',
      dataIndex: 'merchant_code',
      key: 'merchant_code'
    },
    {
      title: 'Customer Code',
      dataIndex: 'customer_code',
      key: 'customer_code'
    },
    {
      title: 'No. Different',
      dataIndex: 'no_different',
      key: 'no_different'
    },
    {
      title: 'Blacklist',
      dataIndex: 'blacklist',
      key: 'blacklist'
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: record => (
        <>
        <Space direction='horizontal'>
        <Button type='primary' onClick={() => detailModal(record)}>Detail</Button>
        <Button danger onClick="">Blacklist</Button>
        </Space>
        </>
      )
    }
  ]
  return {
    column: tmpDataColumn,
    records: a,
    isDetailModalOpen,
    setIsDetailModalOpen
  }
}

export default dataBlacklist
