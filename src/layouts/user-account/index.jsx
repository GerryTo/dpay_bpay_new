import { Button, Flex, Modal, Space, Table } from 'antd'
import React, { useState } from 'react'
import dataAccountTableData from './data/dataaccountTableData'
import ModalAccount from './components/ModalAccount'
import ModalEdit from './components/ModalEdit'
import Search from 'antd/es/input/Search'

const Account = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleAddNewClick = () => {
    setIsModalVisible(true)
  }

  const handleModalOk = () => {
    setIsModalVisible(false)
  }

  const handleModalCancel = () => {
    setIsModalVisible(false)
  }
  let {
    columns,
    records,
    isLoading,
    setIsEditModalOpen,
    isEditModalOpen,
    handleSearch
  } = dataAccountTableData()
  console.log(records)
  return (
    <>
      <Space direction="horizontal">
        <Button type="primary" onClick={handleAddNewClick}>
          Add New
        </Button>
        <Search placeholder="search" onSearch={handleSearch} />
      </Space>
      <Table
        dataSource={records}
        columns={columns}
        loading={isLoading}
        scroll={{ x: 10 }}
        footer={() => `Total Rows : ${records.length}`}
      />
      <ModalAccount
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
      <ModalEdit
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
      />
    </>
  )
}

export default Account
