import React, { useEffect, useState } from 'react'
import { apiGetMyBankBalance } from '../../../services/api'
import { Typography } from 'antd'

const dataBalanceTableData = () => {
  const [isLoading, setIsloading] = useState(false)
  const [records, setRecords] = useState(null)

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    try {
      setIsloading(true)
      const { data } = await apiGetMyBankBalance()
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
        total += parseFloat(records.current)
      })
      setTotalBalance(total)
    }
  }, [records])

  let tmpDataColumn = [
    {
      title: 'Account No.',
      dataIndex: 'accountno',
      key: 'accountno'
    },
    {
      title: 'Account Name',
      dataIndex: 'accountname',
      key: 'accountname'
    },
    {
      title: 'Bank',
      dataIndex: 'bankcode',
      key: 'bankcode'
    },
    {
      title: 'Balance',
      dataIndex: 'current',
      key: 'current'
    },
    {
      title: 'Daily',
      dataIndex: 'daily',
      key: 'daily',
      render: record => <Typography>{record ? record : '0'}</Typography>
    },
    {
      title: 'Daily Withdrawal Limit',
      dataIndex: 'dailyWithdrawLimit',
      key: 'dailyWithdrawLimit',
      render: record => <Typography>{record ? record : '0'}</Typography>
    },
    {
      title: 'Daily Withdrawal',
      dataIndex: 'dailyWithdraw',
      key: 'dailyWithdraw',
      render: record => <Typography>{record ? record : '0'}</Typography>
    }
  ]
  return {
    column: tmpDataColumn,
    isLoading: isLoading,
    records: records,
    totalBalance
  }
}

export default dataBalanceTableData
