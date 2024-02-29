import React, { useEffect, useState } from 'react'
import { apiGetAgentCreditAdjustment } from '../../../services/api'
import dayjs from 'dayjs'

const dataAgentCreditAdjustmentTableData = () => {
  const [records, setRecords] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const defValue = dayjs()
  const [valueDateRange, setValueDateRange] = useState([null, null])

  function handlerDatePicker(value1, value2) {
    console.log(value1)
    getData(value1, value2)
  }

  useEffect(() => {
    getData(defValue, defValue)
  }, [])

  async function getData(from, to) {
    try {
      setIsLoading(true)
      console.log(from.format('YYYY-MM-DD'))
      let params = {
        start: from.format('YYYY-MM-DD') + ' 00:00:00',
        end: to.format('YYYY-MM-DD') + ' 23:59:59'
      }
      const { data } = await apiGetAgentCreditAdjustment(JSON.stringify(params))
      const { status } = data
      if (status === 'success') {
        setIsLoading(false)
        setRecords(data.data)
        let sortedData = data.data.sort((a, b) => {
          return new Date(b.d_insert) - new Date(a.d_insert) // Sorting by 'd_insert' in descending order
        })
        setRecords(sortedData)
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
      title: 'ID',
      dataIndex: 'n_creditAdjustmentId',
      key: 'n_creditAdjustmentId'
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
      title: 'Type',
      dataIndex: 'v_type',
      key: 'v_type'
    },
    {
      title: 'Bank',
      dataIndex: 'v_bankcode',
      key: 'v_bankcode'
    },
    {
      title: 'Account No.',
      dataIndex: 'v_bankaccountno',
      key: 'v_bankaccountno'
    },
    {
      title: 'Amount',
      dataIndex: 'n_amount',
      key: 'n_amount'
    },
    {
      title: 'Note',
      dataIndex: 'v_note',
      key: 'v_note'
    }
  ]
  return {
    column: tmpDataColumn,
    records: records,
    isLoading,
    defValue,
    handlerDatePicker
  }
}

export default dataAgentCreditAdjustmentTableData
