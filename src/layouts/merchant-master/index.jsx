import React, { useState } from 'react'
import { Button, DatePicker, Modal, Select, Space, Table } from 'antd'
import dataMerchantMasterTableData from './data/dataMerchantMasterTableData'
import ModalEdit from './components/ModalEdit'
import ModalAddNew from './components/ModalAddNew'

const MerchantMaster = () => {
  const [isAddNewModalOpen, setIsAddNewModalOpen] = useState(false)
  const addnewModal = record => {
    setIsAddNewModalOpen(true)
  }
  let { column, records, isLoading, isEditModalOpen, setIsEditModalOpen } =
    dataMerchantMasterTableData()
  console.log(records)
  return (
    <>
      <Button type="primary" onClick={addnewModal}>
        Add New
      </Button>
      <Table
        dataSource={records}
        columns={column}
        loading={isLoading}
        scroll={{ x: 10 }}
      />
      <ModalEdit
        setIsEditModalOpen={setIsEditModalOpen}
        isEditModalOpen={isEditModalOpen}
      />
      <ModalAddNew
        setIsAddNewModalOpen={setIsAddNewModalOpen}
        isAddNewModalOpen={isAddNewModalOpen}
      />
    </>
  )
}

export default MerchantMaster
