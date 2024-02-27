import React, { useEffect, useState } from 'react'
import a from '../../../tmpdata/banklimit.json'
import { apiGetMyBankLimit } from '../../../services/api'
import { Typography } from 'antd'

const dataLimitTableData = () => {
  const [isLoading, setIsloading] = useState(false)
  const [records, setRecords] = useState([])

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    try {
      setIsloading(true)
      const { data } = await apiGetMyBankLimit()
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
    setIsloading(false)
    setFilteredData(filteredData)
  }
  const recordsToShow = searchQuery ? filteredData : records

  useEffect(() => {
    handleSearch(searchQuery)
  }, [searchQuery])

  let tmpDataColumn = [
    {
      title: 'Account No.',
      dataIndex: 'v_bankaccountno',
      key: 'v_bankaccountno'
    },
    {
      title: 'Account Name',
      dataIndex: 'v_bankaccountname',
      key: 'v_bankaccountname'
    },
    {
      title: 'Bank',
      dataIndex: 'v_bankcode',
      key: 'v_bankcode'
    },
    {
      title: 'Type',
      dataIndex: 'v_type',
      key: 'v_type'
    },
    {
      title: 'Is Active',
      dataIndex: 'v_isactive',
      key: 'v_isactive'
    },
    {
      title: 'Daily Deposit Limit',
      dataIndex: 'n_dailydepositlimit',
      key: 'n_dailydepositlimit'
    },
    {
      title: 'Current Transaction',
      dataIndex: 'dailydeposit',
      key: 'dailydeposit',
      render: record => (
        <>
          <Typography>{record ? record : '0.00'}</Typography>
        </>
      )
    }
  ]
  return {
    column: tmpDataColumn,
    records: recordsToShow,
    setIsloading,
    isLoading,
    handleSearch
  }
}

export default dataLimitTableData
