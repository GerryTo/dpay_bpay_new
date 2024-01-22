import React from 'react'
import a from '../../../tmpdata/download.json'
import { Button } from 'antd'
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
      key: 'link',
      render: record => (
        <>
        <Button type="primary" onClick="">Download</Button>
        </>
      )
    }
  ]
  return { column: tmpDataColumn, records: a }
}

export default dataMerchantReport
