import { useEffect, useState } from 'react'
import a from '../../../tmpdata/datalist.json'
import { Button, Space } from 'antd'
import { blue, lime } from '@ant-design/colors';
import axios from 'axios';
import { apiGetMybankList } from '../../../services/api';
const dataListTableData = () => {
  const [isData, setIsData] = useState([])
  useEffect(()=>{
    getData()
  },[])  
  const getData = async () => {
    try {
      let params = {"bankAccNo":null, "bankCode":null}
      const { data } = await apiGetMybankList(JSON.stringify(params))
      if(data.status === 'success'){
        setIsData(data.data);
      }else{
        console.log(data.status);
      }
      
    }
    catch(e) {
      console.log(e)
    }
  }
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
      title: 'Group',
      dataIndex: 'v_groupname',
      key: 'v_groupname'
    },
    {
      title: 'Alias', 
      dataIndex: 'v_alias',
      key: 'v_alias'
    },
    {
      title: 'Account No',
      dataIndex: 'v_bankaccountno',
      key: 'v_bankaccountno'
    },
    {
      title: 'Account Name',
      dataIndex: 'v_bankaccountname',
      key: 'v_bankaccountname'
    },
    {
      title: 'Bank',
      dataIndex: 'v_bankcode',
      key: 'v_bankcode'
    },
    {
      title: 'Login',
      dataIndex: 'v_userlogin',
      key: 'v_userlogin'
    },
    {
      title: 'Type',
      dataIndex: 'v_type',
      key: 'v_type'
    },
    {
      title: 'Active',
      dataIndex: 'v_isactive',
      key: 'v_isactive'
    },
    {
      title: 'Locked',
      dataIndex: 'n_islocked',
      key: 'n_islocked'
    },
    {
      title: 'Last Used',
      dataIndex: 'd_lastused',
      key: 'd_lastused'
    },
    {
      title: 'Agent Commission',
      dataIndex: 'n_agentCommission',
      key: 'n_agentCommission'
    },
    {
      title: 'Date Insert',
      dataIndex: 'd_insert',
      key: 'd_insert'
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
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
    records: isData,
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
