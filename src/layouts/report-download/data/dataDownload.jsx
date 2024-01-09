import React, { useState } from 'react'
import a from '../../../tmpdata/download.json'

const dataDownload = () => {
  const [isLoading, setIsloading] = useState(false)
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
  return {
    column: tmpDataColumn,
    records: a
  }
}

export default dataDownload
