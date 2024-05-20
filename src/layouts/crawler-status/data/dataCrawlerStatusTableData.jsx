import React, { useEffect, useState } from 'react'
import a from '../../../tmpdata/db.json'
import { apiGetAppiumAccount } from '../../../services/api'

const dataCrawlerStatusTableData = () => {
  const [isLoading, setIsloading] = useState(false)
  const [records, setRecords] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [searchColumn, setSearchColumn] = useState('all')

  useEffect(() => {
    getStatus()
  }, [])

  async function getStatus() {
    try {
      setIsloading(true)
      const { data } = await apiGetAppiumAccount()
      if (data.status === 'success') {
        setIsloading(false)
        const newData = data.data.map((record, index) => ({
          ...record,
          key: index
        }))
        setRecords(newData)
      } else {
        setIsloading(false)
        console.log(data.status)
      }
    } catch (e) {
      console.log(e)
    }
  }

  const handleSearch = query => {
    setIsloading(true)
    setSearchQuery(query)
    const filteredData = records.filter(record => {
      if (searchColumn === 'all') {
        return Object.values(record).some(
          value =>
            typeof value === 'string' &&
            value.toLowerCase().includes(query.toLowerCase())
        )
      } else {
        return (
          typeof record[searchColumn] === 'string' &&
          record[searchColumn].toLowerCase().includes(query.toLowerCase())
        )
      }
    })
    setFilteredData(filteredData)
    setIsloading(false)
  }

  const handleColumnChange = value => {
    setSearchColumn(value)
  }
  const handleRefresh = () => {
    getStatus()
  }

  const recordsToShow = searchQuery ? filteredData : records

  let tmpDataColumn = [
    {
      title: 'User',
      dataIndex: 'v_mainuser',
      key: 'v_mainuser'
    },
    {
      title: 'Bank',
      dataIndex: 'v_bankcode',
      key: 'v_bankcode'
    },
    {
      title: 'System',
      dataIndex: 'v_system',
      key: 'v_system'
    },
    {
      title: 'Status',
      dataIndex: 'v_status',
      key: 'v_status'
    },
    {
      title: 'Heart Beat',
      dataIndex: 'd_heartbeat',
      key: 'd_heartbeat'
    },
    {
      title: 'Note',
      dataIndex: 'v_status_desc',
      key: 'v_status_desc'
    }
  ]
  return {
    column: tmpDataColumn,
    records: recordsToShow,
    isLoading,
    handleColumnChange,
    handleSearch,
    searchColumn,
    searchQuery,
    handleRefresh
  }
}

export default dataCrawlerStatusTableData
