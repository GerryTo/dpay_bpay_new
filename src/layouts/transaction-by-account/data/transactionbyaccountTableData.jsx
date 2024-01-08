import React from 'react'

export const transactionbyaccountTableData = () => {
  const data = [
    {
      key: '1',
      futuretrx: 'test',
      date: '2024-10-10'
    }
  ]
  let tmpDataColumns = [
    {
      dataIndex: 'futuretrx',
      title: 'Future Trx ID'
    },
    {
      dataIndex: 'date',
      title: 'Date'
    },
    {
      dataIndex: '',
      title: 'Merchant Code'
    },
    {
      dataIndex: '',
      title: 'Status'
    },
    {
      dataIndex: '',
      title: 'Customer Code'
    },
    {
      dataIndex: '',
      title: 'Bank'
    },
    {
      dataIndex: '',
      title: 'Debit'
    },
    {
      dataIndex: '',
      title: 'Credit'
    },
    {
      dataIndex: '',
      title: 'Trans Type'
    },
    {
      dataIndex: '',
      title: 'Status'
    },
    {
      dataIndex: '',
      title: 'Callback Status'
    },
    {
      dataIndex: '',
      width: '25%',
      title: 'Fee'
    },
    {
      dataIndex: '',
      title: 'Notes'
    },
    {
      dataIndex: '',
      title: 'Notes 2'
    },
    {
      dataIndex: '',
      title: 'Notes 3'
    },
    {
      dataIndex: '',
      title: 'Sms Phone'
    },
    {
      dataIndex: '',
      title: 'Sms Agent'
    },
    {
      dataIndex: '',
      title: 'Trans ID'
    },
    {
      dataIndex: '',
      title: 'Alias'
    },
    {
      dataIndex: '',
      title: 'Acc Source'
    },
    {
      dataIndex: '',
      title: 'Acc Source Name'
    },
    {
      dataIndex: '',
      title: 'Acc Dest'
    },
    {
      dataIndex: '',
      title: 'Acc Dest Name'
    },
    {
      dataIndex: '',
      title: 'Server Name'
    },
    {
      dataIndex: '',
      title: 'Server URL'
    },
    {
      dataIndex: '',
      title: 'Receipt ID'
    },
    {
      dataIndex: '',
      title: 'Memo'
    },
    {
      dataIndex: '',
      title: 'Action'
    }
  ]
  return {
    columns: tmpDataColumns,
    records: data
  }
}

export default transactionbyaccountTableData
