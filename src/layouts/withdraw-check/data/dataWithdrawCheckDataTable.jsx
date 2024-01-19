import React, { useState } from 'react'
import a from '../../../tmpdata/db.json'
import { Button, Space } from 'antd'
const dataWithdrawCheckDataTable = () => {
  const [ isReassignModalOpen, setIsReassignModalOpen ] = useState(false)
  const [ isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const reassignModal = record => {
    setIsReassignModalOpen(true)
  }
  const successModal = record => {
    setIsSuccessModalOpen(true)
  }
  let tmpDataColumn = [
    {
      title: 'Future ID',
      dataIndex: 'future_id',
      key: 'future_id'
    },
    {
      title: 'System Timestamp',
      dataIndex: 'system_timestamp',
      key: 'system_timestamp'
    },
    {
      title: 'Merchant ID',
      dataIndex: 'merchant_id',
      key: 'merchant_id'
    },
    {
      title: 'Customer Code',
      dataIndex: 'customer_code',
      key: 'customer_code'
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount'
    },
    {
      title: 'Client Timestamp',
      dataIndex: 'client_timestamp',
      key: 'client_timestamp'
    },
    {
      title: 'Bank',
      dataIndex: 'bank',
      key: 'bank'
    },
    {
      title: 'Dest Bank Account',
      dataIndex: 'dest_bank_account',
      key: 'dest_bank_account'
    },
    {
      title: 'Transaction ID',
      dataIndex: 'transaction_id',
      key: 'transaction_id'
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: record => (
        <>
        <Space direction="horizontal">
          <Button type='primary' >Generate</Button>
          <Button onClick={() => reassignModal(record)}>Re-Assign</Button>
          <Button onClick="">Fail</Button>
          <Button onClick={() => successModal(record)}>Success</Button>
        </Space>
        </>
      )
    }
  ]
  return { column: tmpDataColumn, records: a, isReassignModalOpen, setIsReassignModalOpen, isSuccessModalOpen, setIsSuccessModalOpen }
}

export default dataWithdrawCheckDataTable
