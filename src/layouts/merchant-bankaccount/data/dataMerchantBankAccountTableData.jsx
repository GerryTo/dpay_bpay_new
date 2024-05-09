import React, { useEffect, useState } from 'react'
import { apiGetMerchantAcc } from '../../../services/api'
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
      key: 'v_alias'
    },
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
      title: 'Login',
      dataIndex: 'v_userlogin',
      key: 'v_userlogin'
    },
    {
      title: 'Type',
      dataIndex: 'v_type',
      key: 'v_type'
    },
    {
      title: 'Active',
      dataIndex: 'v_isactive',
      key: 'v_isactive'
    },
    {
      title: 'Locked',
      dataIndex: 'n_islocked',
      key: 'n_islocked'
    },
    {
      title: 'Last Used',
      dataIndex: 'd_lastused',
      key: 'd_lastused'
    },
    {
      title: 'Agent Commission',
      dataIndex: 'n_agentCommission',
      key: 'n_agentCommission'
    },
    {
      title: 'Group ID',
      dataIndex: 'n_groupid',
      key: 'n_groupid'
    }
  ]
  return {
    column: tmpDataColumn,
    records,
    isLoading
  }
}

export default dataMerchantBankAccountTableData
