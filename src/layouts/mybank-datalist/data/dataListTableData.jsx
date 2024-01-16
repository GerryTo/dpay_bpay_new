import { useState } from 'react'
import a from '../../../tmpdata/datalist.json'
import { Button, Space } from 'antd'
import { blue, lime } from '@ant-design/colors';
const dataListTableData = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isLastTrxModalOpen, setIsLastTrxModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isRecord, setIsRecord] = useState([])
  const lasttrxModal = record => {
    setIsLastTrxModalOpen(true)
    setIsRecord(record)
  } 
  const editModal = record => {
    setIsEditModalOpen(true)
    setIsRecord(record)
  }
  let tmpDataColumn = [
    {
      title: 'id',
      dataIndex: 'n_id',
      key: 'n_id'
    },
    {
      title: 'status',
      dataIndex: 'v_status',
      key: 'v_status'
    },
    {
      title: 'Account Name',
      dataIndex: 'account_name',
      key: 'account_name'
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: record => (
        <>
        <Space direction='horizontal'>
        <Button type="primary" onClick={() => editModal(record)}>
          Edit
        </Button>
        <Button style={{backgroundColor: "lime"}} onClick={() => lasttrxModal(record)}>
          Last Trx
        </Button>
        <Button style={{backgroundColor:"gray"}}>More</Button>
        </Space>
        </>
      )
    }
  ]

  return {
    column: tmpDataColumn,
    records: a,
    isLoading,
    isEditModalOpen,
    setIsEditModalOpen,
    isRecord,
    setIsRecord,
    isLastTrxModalOpen,
    setIsLastTrxModalOpen
  }
}

export default dataListTableData
