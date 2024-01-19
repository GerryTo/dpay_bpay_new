import React from 'react'
import dataModalDetail from './data/dataModalDetail'
import { Modal, Table } from 'antd'

const ModalDetail = ({setIsDetailModalOpen, isDetailModalOpen}) => {
    const handleOk = () => {
        setIsDetailModalOpen(false)
    }
    const handleCancel = () => {
        setIsDetailModalOpen(false)
    }
    let {columns, records} = dataModalDetail()
  return (
    <>
    <Modal width={"74%"} title="Transaction" open={isDetailModalOpen} onCancel={handleCancel} onOk={handleOk}>
        <Table dataSource={records} columns={columns} scroll={{x:10}}/>
    </Modal>
    </>
  )
}

export default ModalDetail
