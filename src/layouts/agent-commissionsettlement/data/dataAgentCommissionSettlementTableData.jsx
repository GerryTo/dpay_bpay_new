import React, { useEffect, useState } from 'react'
import a from '../../../tmpdata/agentcommissionsettlement.json'
import { Button, Space, Typography } from 'antd'
import { apiGetAgentCommissionSettlement } from '../../../services/api'
import dayjs from 'dayjs'

const dataAgentCommissionSettlementTableData = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [records, setRecords] = useState([])
  const [to, setTo] = useState('')
  const [from, setFrom] = useState('')
  const [valueDateRange, setValueDateRange] = useState([null, null])

  const defValue = dayjs()

  function handlerDatePicker(value1, value2) {
    console.log(value1)
    getData(value1, value2)
  }

  useEffect(() => {
    getData(defValue, defValue)
  }, [valueDateRange])
  async function getData(from, to) {
    try {
      const params = {
        from: from.format('YYYY-MM-DD') + ' 00:00:00',
        to: to.format('YYYY-MM-DD') + ' 23:59:59'
      }
      const { data } = await apiGetAgentCommissionSettlement(
        JSON.stringify(params)
      )
      const { status } = data
      if (status === 'success') {
        setIsLoading(false)
        setRecords(data.data)
      } else {
        setIsLoading(false)
        console.log(status)
      }
    } catch (e) {
      setIsLoading(false)
      console.log(e)
    }
  }

  let tmpDataColumn = [
    {
      title: 'Settlement ID',
      dataIndex: 'n_id',
      key: 'n_id'
    },
    {
      title: 'Date',
      dataIndex: 'd_insert',
      key: 'd_insert'
    },

    {
      title: 'Agent',
      dataIndex: 'v_user',
      key: 'v_user'
    },
    {
      title: 'Bank',
      dataIndex: 'v_bankcode',
      key: 'v_bankcode'
    },
    {
      title: 'Account Source',
      dataIndex: 'v_bankaccountsource',
      key: 'v_bankaccountsource'
    },
    {
      title: 'Account Target',
      dataIndex: 'v_bankaccounttarget',
      key: 'v_bankaccounttarget'
    },
    {
      title: 'Amount',
      dataIndex: 'n_amount',
      key: 'n_amount'
    },
    {
      title: 'Status',
      dataIndex: 'n_status',
      key: 'n_status'
    },
    {
      title: 'Notes',
      dataIndex: 'v_note',
      key: 'v_note',
      render: record => (
        <Typography style={{ width: '100px' }}>
          {' '}
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
            <Button onClick="" type="primary">
              Approve
            </Button>
            <Button onClick="" danger>
              Reject
            </Button>
          </Space>
        </>
      )
    }
  ]
  return {
    column: tmpDataColumn,
    records: records,
    handlerDatePicker,
    valueDateRange,
    defValue
  }
}

export default dataAgentCommissionSettlementTableData
