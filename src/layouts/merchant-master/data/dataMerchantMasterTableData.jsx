import React, { useEffect, useState } from 'react'
import a from '../../../tmpdata/merchantmaster.json'
import { Button, Space } from 'antd'
import { apiGetMerchantList } from '../../../services/api'
const dataMerchantMasterTableData = () => {
  const [isLoading, setIsloading] = useState(false)
  const [records, setRecords] = useState([])
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const editModal = record => {
    setIsEditModalOpen(true)
  }
  async function getData() {
    try {
      setIsloading(true)
      const { data } = await apiGetMerchantList()
      const { status } = data
      if (status === 'success') {
        setIsloading(false)
        setRecords(data.data)
      } else {
        setIsloading(false)
        console.log(status)
      }
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    getData()
  }, [])
  let tmpDataColumn = [
    {
      title: 'Merchant Code',
      dataIndex: 'v_merchantcode',
      key: 'v_merchantcode'
    },
    {
      title: 'Merchant Name',
      dataIndex: 'v_merchantname',
      key: 'v_merchantname'
    },
    {
      title: 'Timezone',
      dataIndex: 'n_timezone',
      key: 'n_timezone'
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: record => (
        <>
          <Space direction="horizontal">
            <Button type="primary" onClick={() => editModal(record)}>
              Edit
            </Button>
            <Button danger onClick="">
              Delete
            </Button>
          </Space>
        </>
      )
    }
  ]
  return {
    column: tmpDataColumn,
    records: records,
    isEditModalOpen,
    setIsEditModalOpen
  }
}

export default dataMerchantMasterTableData
