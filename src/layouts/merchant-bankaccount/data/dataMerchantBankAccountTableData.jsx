import React, { useEffect, useState } from 'react'
import { apiGetMerchantAcc } from '../../../services/api'
import { Typography } from 'antd'
const dataMerchantBankAccountTableData = () => {
  const [isLoading, setIsloading] = useState(false)
  const [records, setRecords] = useState([])
  const [merchant, setMerchant] = useState('BB88')
  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    try {
      setIsloading(true)
      let params = {
        merchant: merchant
      }
      const { data } = await apiGetMerchantAcc(JSON.stringify(params))
      if (data.status === 'success') {
        setIsloading(false)
        setRecords(data.data)
      } else {
        setIsloading(false)
        console.log(data.status)
      }
    } catch (e) {
      console.log(e)
    }
  }

  let tmpDataColumn = [
    {
      title: 'Alias',
      dataIndex: 'v_alias',
      key: 'v_alias',
      render: record => (
        <>
          <Typography style={{ width: '100px' }}>
            {record ? record : '-'}
          </Typography>
        </>
      )
    },
    {
      title: 'Account No.',
      dataIndex: 'v_bankaccountno',
      key: 'v_bankaccountno',
      render: record => (
        <>
          <Typography style={{ width: '100px' }}>
            {record ? record : '-'}
          </Typography>
        </>
      )
    },
    {
      title: 'Account Name',
      dataIndex: 'v_bankaccountname',
      key: 'v_bankaccountname',
      render: record => (
        <>
          <Typography style={{ width: '100px' }}>
            {record ? record : '-'}
          </Typography>
        </>
      )
    },
    {
      title: 'Bank',
      dataIndex: 'v_bankcode',
      key: 'v_bankcode',
      render: record => (
        <>
          <Typography style={{ width: '100px' }}>
            {record ? record : '-'}
          </Typography>
        </>
      )
    },
    {
      title: 'Login',
      dataIndex: 'v_userlogin',
      key: 'v_userlogin',
      render: record => (
        <>
          <Typography style={{ width: '100px' }}>
            {record ? record : '-'}
          </Typography>
        </>
      )
    },
    {
      title: 'Type',
      dataIndex: 'v_type',
      key: 'v_type',
      render: record => (
        <>
          <Typography style={{ width: '50px' }}>
            {record ? record : '-'}
          </Typography>
        </>
      )
    },
    {
      title: 'Active',
      dataIndex: 'v_isactive',
      key: 'v_isactive',
      render: record => (
        <>
          <Typography style={{ width: '50px' }}>
            {record ? record : '-'}
          </Typography>
        </>
      )
    },
    {
      title: 'Locked',
      dataIndex: 'n_islocked',
      key: 'n_islocked',
      render: record => (
        <>
          <Typography style={{ width: '50px' }}>
            {record ? record : '-'}
          </Typography>
        </>
      )
    },
    {
      title: 'Last Used',
      dataIndex: 'd_lastused',
      key: 'd_lastused',
      render: record => (
        <>
          <Typography style={{ width: '50px' }}>
            {record ? record : '-'}
          </Typography>
        </>
      )
    },
    {
      title: 'Agent Commission',
      dataIndex: 'n_agentCommission',
      key: 'n_agentCommission',
      render: record => (
        <>
          <Typography style={{ width: '50px' }}>
            {record ? record : '0'}
          </Typography>
        </>
      )
    },
    {
      title: 'Group ID',
      dataIndex: 'n_groupid',
      key: 'n_groupid',
      render: record => (
        <>
          <Typography style={{ width: '50px' }}>
            {record ? record : '-'}
          </Typography>
        </>
      )
    }
  ]
  return {
    column: tmpDataColumn,
    records,
    isLoading
  }
}

export default dataMerchantBankAccountTableData
