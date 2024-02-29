import React, { useEffect, useState } from 'react'
import { apiGetMyBankUpdateSelected } from '../../../services/api'
import { Typography } from 'antd'

const dataMybankUpdateSelectedTableData = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [records, setRecords] = useState([])
  const [state, setState] = useState('setActive')
  const [searchColumn, setSearchColumn] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRowKeys(selectedRows)
    }
  }

  const recordsWithIndex = data => {
    return data.map((item, index) => {
      return {
        ...item,
        key: index
      }
    })
  }

  const handleChange = value => {
    setState(value)
  }
  const handleColumnChange = value => {
    setSearchColumn(value)
  }
  const handleRefresh = () => {
    getData()
  }

  const hasSelected = selectedRowKeys.length > 0

  const handleSearch = query => {
    setIsLoading(true)
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
    setIsLoading(false)
  }

  const recordsToShow = searchQuery ? filteredData : records

  async function getData() {
    try {
      setIsLoading(true)
      let params = {
        bankAccNo: null,
        bankCode: null
      }
      const { data } = await apiGetMyBankUpdateSelected(JSON.stringify(params))
      const { status } = data
      if (status === 'success') {
        setIsLoading(false)
        setRecords(recordsWithIndex(data.data))
      } else {
        setIsLoading(false)
        console.log(status)
      }
    } catch (e) {
      setIsLoading(false)
      console.log(e)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  let tmpDataColumn = [
    {
      title: 'Group',
      dataIndex: 'v_groupname',
      render: record => <Typography>{record ? record : '-'}</Typography>
    },
    {
      title: 'Alias',
      dataIndex: 'v_alias'
    },
    {
      title: 'Account No.',
      dataIndex: 'v_bankaccountno'
    },
    {
      title: 'Account Name',
      dataIndex: 'v_bankaccountname'
    },
    {
      title: 'Bank',
      dataIndex: 'v_bankcode'
    },
    {
      title: 'Login',
      dataIndex: 'v_userlogin'
    },
    {
      title: 'Type',
      dataIndex: 'v_type'
    },
    {
      title: 'Active',
      dataIndex: 'v_isactive'
    },
    {
      title: 'Locked',
      dataIndex: 'n_islocked'
    },
    {
      title: 'Last Used',
      dataIndex: 'd_lastused',
      render: record => <Typography>{record ? record : '-'}</Typography>
    },
    {
      title: 'Agent Commission',
      dataIndex: 'n_agentCommission'
    },
    {
      title: 'Date Insert',
      dataIndex: 'd_insert'
    }
  ]
  return {
    column: tmpDataColumn,
    recordsToShow,
    isLoading,
    state,
    handleChange,
    handleRefresh,
    searchColumn,
    handleColumnChange,
    searchQuery,
    handleSearch,
    hasSelected,
    rowSelection,
    selectedRowKeys
  }
}

export default dataMybankUpdateSelectedTableData
