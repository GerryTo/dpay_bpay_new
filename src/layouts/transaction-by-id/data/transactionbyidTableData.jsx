import React, { useEffect, useState } from 'react'
import TransactionByAccountHistory from '../../../tmpdata/db.json'
import { apiGetTransactionByFutureId } from '../../../services/api'
import { Button, Space } from 'antd'

const transactionbyidTableData = () => {
  const [records, setRecords] = useState([])
  const [isLoading, setIsLoading] = useState([])
  const [similar, setSimilar] = useState(false)
  const [history, setHistory] = useState(false)

  const handleSearch = value => {
    getList(value, similar, history)
  }

  const handleSimilar = value => {
    setSimilar(value.target.checked)
  }

  const handleHistory = value => {
    setHistory(value.target.checked)
  }

  async function getList(futureid, similar, history) {
    try {
      setIsLoading(true)
      let params = { futureid, isSimilar: similar, isHistory: history }
      const { data } = await apiGetTransactionByFutureId(JSON.stringify(params))
      if (data.status === 'success') {
        setIsLoading(false)
        setRecords(data.data)
        console.log(data.data)
      } else {
        setIsLoading(false)
        console.log(data.status)
      }
    } catch (e) {
      setIsLoading(false)
      console.log(e)
    }
  }

  let tmpDataColumns = [
    {
      dataIndex: 'n_futuretrxid',
      title: 'Future Trx ID'
    },
    {
      dataIndex: 'd_insert',
      title: 'Date'
    },
    {
      dataIndex: 'v_merchantcode',
      title: 'Merchant Code'
    },
    {
      dataIndex: 'v_status',
      title: 'Status'
    },
    {
      dataIndex: 'v_customercode',
      title: 'Customer Code'
    },
    {
      dataIndex: 'v_bankcode',
      title: 'Bank'
    },
    {
      dataIndex: 'debit',
      title: 'Debit'
    },
    {
      dataIndex: 'credit',
      title: 'Credit'
    },
    {
      dataIndex: 'v_transactiontype',
      title: 'Trans Type'
    },
    {
      dataIndex: 'v_status',
      title: 'Status'
    },
    {
      dataIndex: 'v_merchantcallbackresponse',
      title: 'Callback Status'
    },
    {
      dataIndex: 'n_fee',
      width: '25%',
      title: 'Fee'
    },
    {
      dataIndex: 'v_notes',
      title: 'Notes'
    },
    {
      dataIndex: 'v_notes2',
      title: 'Notes 2'
    },
    {
      dataIndex: 'v_notes3',
      title: 'Notes 3'
    },
    {
      dataIndex: 'sms_phone',
      title: 'Sms Phone'
    },
    {
      dataIndex: 'sms_agent',
      title: 'Sms Agent'
    },
    {
      dataIndex: 'v_transactionid',
      title: 'Trans ID'
    },
    {
      dataIndex: 'v_dstaccountname',
      title: 'Alias'
    },
    {
      dataIndex: 'v_accountno',
      title: 'Acc Source'
    },
    {
      dataIndex: 'acc_source_name',
      title: 'Acc Source Name'
    },
    {
      dataIndex: 'v_dstbankaccountno',
      title: 'Acc Dest'
    },
    {
      dataIndex: 'v_dstbankaccountname',
      title: 'Acc Dest Name'
    },
    {
      dataIndex: 'server_name',
      title: 'Server Name'
    },
    {
      dataIndex: 'server_url',
      title: 'Server URL'
    },
    {
      dataIndex: 'receipt_id',
      title: 'Receipt ID'
    },
    {
      dataIndex: 'v_memo',
      title: 'Memo'
    },
    {
      dataIndex: 'action',
      title: 'Action',
      render: record => (
        <>
          <Space direction="horizontal">
            <Button onClick="">Edit</Button>
            <Button danger onClick="">
              Fail
            </Button>
            <Button type="primary" onClick="">
              Success
            </Button>
          </Space>
        </>
      )
    }
  ]
  return {
    columns: tmpDataColumns,
    records,
    isLoading,
    handleSearch,
    handleSimilar,
    handleHistory
  }
}

export default transactionbyidTableData
