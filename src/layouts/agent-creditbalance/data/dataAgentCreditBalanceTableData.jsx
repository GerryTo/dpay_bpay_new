import React, { useEffect, useState } from 'react'
import a from '../../../tmpdata/agentcreditbalance.json'
import { Button, Space } from 'antd'
import { apiGetAgentCreditBalance } from '../../../services/api'
const dataAgentCreditBalanceTableData = () => {
  const [isAdjustInModalOpen, setIsAdjustInModalOpen] = useState(false)
  const [isAdjustOutModalOpen, setIsAdjustOutModalOpen] = useState(false)
  const [records, setRecords] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    try {
      setIsLoading(true)
      const { data } = await apiGetAgentCreditBalance()
      const { status } = data
      if (status === 'success') {
        setIsLoading(false)
        setRecords(data.data)
      } else {
        setIsLoading(false)
        console.log(status)
      }
    } catch (e) {
      console.log(e)
    }
  }
  const adjustinModal = record => {
    setIsAdjustInModalOpen(true)
  }
  const adjustoutModal = record => {
    setIsAdjustOutModalOpen(true)
  }
  let tmpDataColumn = [
    {
      title: 'Agent',
      dataIndex: 'user',
      key: 'user'
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
      dataIndex: 'isActive',
      key: 'isActive'
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
          <Space direction="horizontal">
            <Button type="primary" onClick={() => adjustinModal(record)}>
              Adjust In
            </Button>
            <Button
              style={{ backgroundColor: 'yellow' }}
              onClick={() => adjustoutModal(record)}
            >
              Adjust Out
            </Button>
          </Space>
        </>
      )
    }
  ]
  return {
    column: tmpDataColumn,
    records: records,
    isAdjustInModalOpen,
    setIsAdjustInModalOpen,
    isAdjustOutModalOpen,
    setIsAdjustOutModalOpen,
    isLoading
  }
}

export default dataAgentCreditBalanceTableData
