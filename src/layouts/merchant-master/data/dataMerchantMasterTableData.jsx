import React, { useState } from 'react'
import a from '../../../tmpdata/merchantmaster.json'
const dataMerchantMasterTableData = () => {
  const [isLoading, setIsloading] = useState(false)
  let tmpDataColumn = [
    {
      title: 'Merchant Code',
      dataIndex: 'merchant_code',
      key: 'merchant_code'
    },
    {
      title: 'Merchant Name',
      dataIndex: 'merchant_name',
      key: 'merchant_name'
    },
    {
      title: 'Timezone',
      dataIndex: 'timezone',
      key: 'timezone'
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

export default dataMerchantMasterTableData
