import React, { useState } from 'react'
import a from '../../../tmpdata/agentcreditbalance.json'
import { Button, Space } from 'antd'
const dataAgentCreditBalanceTableData = () => {
  const [isAdjustInModalOpen, setIsAdjustInModalOpen] = useState(false)
  const [isAdjustOutModalOpen, setIsAdjustOutModalOpen] = useState(false)
  const adjustinModal= record => {
    setIsAdjustInModalOpen(true)
  }
  const adjustoutModal = record => {
    setIsAdjustOutModalOpen(true)
  }
  let tmpDataColumn = [
    {
      title: 'Agent',
      dataIndex: 'agent',
      key: 'agent'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Alias',
      dataIndex: 'alias',
      key: 'alias'
    },
    {
      title: 'Active',
      dataIndex: 'active',
      key: 'active'
    },
    {
      title: 'Nagad',
      dataIndex: 'nagad',
      key: 'nagad'
    },
    {
      title: 'Rocket',
      dataIndex: 'rocket',
      key: 'rocket'
    },
    {
      title: 'Bkash',
      dataIndex: 'bkash',
      key: 'bkash'
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: record => (
        <>
        <Space direction='horizontal'>
        <Button type='primary' onClick={() => adjustinModal(record)}>Adjust In</Button>
        <Button style={{backgroundColor:"yellow"}} onClick={() => adjustoutModal(record)}>Adjust Out</Button>
        </Space>
        </>
      )
    }
  ]
  return { column: tmpDataColumn, records: a, isAdjustInModalOpen, setIsAdjustInModalOpen, isAdjustOutModalOpen, setIsAdjustOutModalOpen }
}

export default dataAgentCreditBalanceTableData
