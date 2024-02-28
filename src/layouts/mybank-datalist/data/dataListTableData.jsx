import { useEffect, useState } from 'react'
import a from '../../../tmpdata/datalist.json'
import { Button, Space, Typography } from 'antd'
import { blue, lime } from '@ant-design/colors'
import axios from 'axios'
import { apiGetMybankList } from '../../../services/api'
const dataListTableData = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isLastTrxModalOpen, setIsLastTrxModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isRecord, setIsRecord] = useState([])
  const [isData, setIsData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [searchColumn, setSearchColumn] = useState('all')
  const handleRefresh = () => {
    getData()
  }
  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    try {
      let params = { bankAccNo: null, bankCode: null }
      setIsLoading(true)
      const { data } = await apiGetMybankList(JSON.stringify(params))
      if (data.status === 'success') {
        setIsLoading(false)
        setIsData(data.data)
      } else {
        setIsLoading(false)
        console.log(data.status)
      }
    } catch (e) {
      console.log(e)
    }
  }

  const handleSearch = query => {
    setIsLoading(true)
    setSearchQuery(query)
    const filteredData = isData.filter(record => {
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

  const handleColumnChange = value => {
    setSearchColumn(value)
  }
  const recordsToShow = searchQuery ? filteredData : isData

  // Update useEffect to listen to changes in searchQuery
  useEffect(() => {
    handleSearch(searchQuery)
  }, [searchQuery])

  const lasttrxModal = record => {
    setIsLastTrxModalOpen(true)
    setIsRecord(record)
  }
  const editModal = record => {
    setIsEditModalOpen(true)
    setIsRecord(record)
  }
  let tmpDataColumn = [
    {
      title: 'Group',
      dataIndex: 'v_groupname',
      key: 'v_groupname',
      render: record => (
        <Typography style={{ width: '50px' }}>
          {record ? record : '-'}
        </Typography>
      )
    },
    {
      title: 'Alias',
      dataIndex: 'v_alias',
      key: 'v_alias',
      render: record => (
        <Typography style={{ width: '100px' }}>
          {record ? record : '-'}
        </Typography>
      )
    },
    {
      title: 'Account No',
      dataIndex: 'v_bankaccountno',
      key: 'v_bankaccountno',
      render: record => (
        <Typography style={{ width: '100px' }}>
          {record ? record : '-'}
        </Typography>
      )
    },
    {
      title: 'Account Name',
      dataIndex: 'v_bankaccountname',
      key: 'v_bankaccountname',
      render: record => (
        <Typography style={{ width: '100px' }}>
          {record ? record : '-'}
        </Typography>
      )
    },
    {
      title: 'Bank',
      dataIndex: 'v_bankcode',
      key: 'v_bankcode',
      render: record => (
        <Typography style={{ width: '100px' }}>
          {record ? record : '-'}
        </Typography>
      )
    },
    {
      title: 'Login',
      dataIndex: 'v_userlogin',
      key: 'v_userlogin',
      render: record => (
        <Typography style={{ width: '100px' }}>
          {record ? record : '-'}
        </Typography>
      )
    },
    {
      title: 'Type',
      dataIndex: 'v_type',
      key: 'v_type',
      render: record => (
        <Typography style={{ width: '50px' }}>
          {record ? record : '-'}
        </Typography>
      )
    },
    {
      title: 'Active',
      dataIndex: 'v_isactive',
      key: 'v_isactive',
      render: record => (
        <Typography style={{ width: '50px' }}>
          {record ? record : '-'}
        </Typography>
      )
    },
    {
      title: 'Locked',
      dataIndex: 'n_islocked',
      key: 'n_islocked',
      render: record => (
        <Typography style={{ width: '50px' }}>
          {record ? record : '-'}
        </Typography>
      )
    },
    {
      title: 'Last Used',
      dataIndex: 'd_lastused',
      key: 'd_lastused',
      render: record => (
        <Typography style={{ width: '100px' }}>
          {record ? record : '-'}
        </Typography>
      )
    },
    {
      title: 'Agent Commission',
      dataIndex: 'n_agentCommission',
      key: 'n_agentCommission',
      render: record => (
        <Typography style={{ width: '50px' }}>
          {record ? record : '-'}
        </Typography>
      )
    },
    {
      title: 'Date Insert',
      dataIndex: 'd_insert',
      key: 'd_insert',
      render: record => (
        <Typography style={{ width: '100px' }}>
          {record ? record : '-'}
        </Typography>
      )
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: record => (
        <>
          <Space direction="horizontal">
            <Button type="primary" onClick={() => editModal(record)}>
              Edit
            </Button>
            <Button
              style={{ backgroundColor: 'lime' }}
              onClick={() => lasttrxModal(record)}
            >
              Last Trx
            </Button>
            <Button style={{ backgroundColor: 'gray' }}>More</Button>
          </Space>
        </>
      )
    }
  ]

  return {
    column: tmpDataColumn,
    records: recordsToShow,
    isLoading,
    isEditModalOpen,
    setIsEditModalOpen,
    isRecord,
    setIsRecord,
    isLastTrxModalOpen,
    setIsLastTrxModalOpen,
    handleSearch,
    handleRefresh,
    handleColumnChange,
    searchQuery,
    searchColumn
  }
}

export default dataListTableData
