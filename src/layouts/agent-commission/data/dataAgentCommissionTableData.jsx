import React, { useEffect, useState } from 'react'
import a from '../../../tmpdata/agentcommission.json'
import { apiGetAgentCommission } from '../../../services/api'
import { Typography } from 'antd'
const dataAgentCommissionTableData = () => {
  const [isLoading, setIsloading] = useState(false)
  const [records, setRecords] = useState(null)

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    try {
      setIsloading(true)
      const { data } = await apiGetAgentCommission()
      const { status } = data
      if (status === 'success') {
        setIsloading(false)
        setRecords(data.data)
      } else {
        setIsloading(false)
        console.log(status)
      }
    } catch (e) {
      setIsloading(false)
      console.log(e)
    }
  }

  const [totalBalance, setTotalBalance] = useState(0)
  useEffect(() => {
    if (records) {
      let total = 0
      records.forEach(records => {
        total += parseFloat(records.commission)
      })
      setTotalBalance(total)
    }
  }, [records])

  const [filteredData, setFilteredData] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = query => {
    setIsloading(true)
    setSearchQuery(query)
    const filteredData = records.filter(record =>
      Object.values(record).some(
        value =>
          typeof value === 'string' &&
          value.toLowerCase().includes(query.toLowerCase())
      )
    )
    setFilteredData(filteredData)
    setIsloading(false)
  }

  const recordsToShow = searchQuery ? filteredData : records

  let tmpDataColumn = [
    {
      title: 'Agent',
      dataIndex: 'user',
      key: 'user'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: record => (
        <>
          <Typography> {record ? record : '-'}</Typography>
        </>
      )
    },
    {
      title: 'Alias',
      dataIndex: 'alias',
      key: 'alias',
      render: record => (
        <>
          <Typography> {record ? record : '-'} </Typography>
        </>
      )
    },
    {
      title: 'Active',
      dataIndex: 'isActive',
      key: 'isActive'
    },
    {
      title: 'Commission',
      dataIndex: 'commission',
      key: 'commission'
    }
  ]
  return {
    column: tmpDataColumn,
    records: recordsToShow,
    isLoading,
    totalBalance,
    handleSearch
  }
}

export default dataAgentCommissionTableData
