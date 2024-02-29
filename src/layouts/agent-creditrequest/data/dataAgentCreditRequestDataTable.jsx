import React, { useEffect, useState } from 'react'
import a from '../../../tmpdata/agentcreditrequest.json'
import dayjs from 'dayjs'
import {
  apiGetAgentCreditAdjustment,
  apiGetAgentCreditRequest
} from '../../../services/api'
import Typography from 'antd/es/typography/Typography'
import { Button, Space } from 'antd'
const dataAgentCreditRequestDataTable = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [records, setRecords] = useState([])
  const defValue = dayjs()

  function handlerDatePicker(value1, value2) {
    setIsLoading(true)
    getData(value1, value2)
    console.log(value1)
  }
  useEffect(() => {
    getData(defValue, defValue)
  }, [])

  async function getData(from, to) {
    try {
      setIsLoading(true)
      let params = {
        from: from.format('YYYY-MM-DD') + ' 00:00:00',
        to: to.format('YYYY-MM-DD') + ' 23:59:59'
      }
      const { data } = await apiGetAgentCreditRequest(JSON.stringify(params))
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
      title: 'Request ID',
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
      title: 'Account No.',
      dataIndex: 'v_bankaccountno',
      key: 'v_bankaccountno'
    },
    {
      title: 'Bank',
      dataIndex: 'v_bankcode',
      key: 'v_bankcode'
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
      render: record => <Typography>{record ? record : '-'}</Typography>
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: record => (
        <>
          <Space direction="horizontal">
            <Button type="primary" onClick="">
              Approve
            </Button>
            <Button danger onClick="">
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
    defValue,
    handlerDatePicker,
    isLoading
  }
}

export default dataAgentCreditRequestDataTable
