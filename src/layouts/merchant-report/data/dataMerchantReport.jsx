import React from 'react'
import a from '../../../tmpdata/download.json'
const dataMerchantReport = () => {
  let tmpDataColumn = [
    {
      title: 'File Name',
      dataIndex: 'file_name',
      key: 'file_name'
    },
    {
      title: 'Link',
      dataIndex: 'link',
      key: 'link'
    }
  ]
  return { column: tmpDataColumn, records: a }
}

export default dataMerchantReport
