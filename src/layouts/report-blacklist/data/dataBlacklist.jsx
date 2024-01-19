import React, { useState } from 'react'
import a from '../../../tmpdata/blacklist.json'

const dataBlacklist = () => {
  const [isLoading, setIsloading] = useState(false)
  let tmpDataColumn = [
    {
      title: 'Merchant Code',
      dataIndex: 'merchant_code',
      key: 'merchant_code'
    },
    {
      title: 'Customer Code',
      dataIndex: 'customer_code',
      key: 'customer_code'
    },
    {
      title: 'No. Different',
      dataIndex: 'no_different',
      key: 'no_different'
    },
    {
      title: 'Blacklist',
      dataIndex: 'blacklist',
      key: 'blacklist'
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action'
    }
  ]
  return {
    column: tmpDataColumn,
    records: a
  }
}

export default dataBlacklist
