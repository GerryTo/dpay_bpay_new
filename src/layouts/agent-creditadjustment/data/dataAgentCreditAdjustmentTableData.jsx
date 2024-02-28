import React, { useEffect, useState } from 'react'
import { apiGetAgentCreditAdjustment } from '../../../services/api'

const dataAgentCreditAdjustmentTableData = () => {
  const [records, setRecords] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    try {
      setIsLoading(true)
      const { data } = await apiGetAgentCreditAdjustment()
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
    }
  ]
  return {
    column: tmpDataColumn,
    records: records,
    isLoading
  }
}

export default dataAgentCreditAdjustmentTableData
