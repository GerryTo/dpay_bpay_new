import React, { useEffect, useState } from 'react'
import TransactionByAccountHistory from '../../../tmpdata/account.json'
import { Button, Space, Typography} from 'antd'
import { apiGetUserList } from '../../../services/api'
export const dataAccountTableData = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const editModal = record => {
    setIsEditModalOpen(true)
  }
  const [isData, setIsData] = useState([])
  useEffect(()=>{getData()},[])
  const getData = async () => {
    try {
      let params = {"merchant":null, "login_type":null}
      const {data} = await apiGetUserList(JSON.stringify(params))
      if (data.status === 'success'){
        setIsData(data.data)
      }
      else{
        console.log(data.status)
      }

    }
    catch(e){console.log(e)}
  }

  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredData = isData.filter((record) =>
      Object.values(record).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(query.toLowerCase())
      )
    );
    setFilteredData(filteredData);
  };
  const recordsToShow = searchQuery ? filteredData : isData;



  let tmpDataColumns = [
    {
      dataIndex: 'v_user',
      key:'v_user',
      title: 'login'
    },
    {
      dataIndex: 'v_active',
      key:'v_active',
      title: 'Active'
    },
    {
      dataIndex: 'v_logintype',
      key:'v_logintype',
      title: 'Login Type'
    },
    {
      dataIndex: 'v_merchantcode',
      key:'v_merchantcode',
      title: 'Merchant',
      render: record=>(
        <Typography>{record === ''||record === null ? '-' : record}</Typography>
      )
      
    },
    {
      dataIndex: 'v_phonenumber',
      key:'v_phonenumber',
      title: 'Phone Number',
      render: record=>(
        <Typography>{record === ''||record === null ? '-' : record}</Typography>
      )
    },
    {
      dataIndex: 'v_agentname',
      key:'v_agentname',
      title: 'Agent',
      render: record=>(
        <Typography>{record === ''||record === null ? '-' : record}</Typography>
      )
    },
    {
      dataIndex: 'v_alias',
      key:'v_alias',
      title: 'Alias',
      render: record=>(
        <Typography>{record === ''||record === null ? '-' : record}</Typography>
      )
    },
    {
      dataIndex: 'action',
      title: 'Action',
      render: record => (
        <>
        <Space direction='horizontal'>
          <Button type='primary' onClick={() => editModal(record)}>Edit</Button>
          <Button danger>Delete</Button>
        </Space>
        </>
      )
    }
  ]
  return {
    columns: tmpDataColumns,
    records: recordsToShow,
    isEditModalOpen,
    setIsEditModalOpen,
    handleSearch
  }
}

export default dataAccountTableData
