import { Checkbox, Flex, Form, Input, Modal, Space, Table, Typography } from 'antd'
import React, { useState } from 'react'
import dataModalLastTrx from './data/dataModalLastTrx'
const ModalLastTrx = ({ setIsLastTrxModalOpen, isLastTrxModalOpen }) => {
  const handleOk = () => {
    setIsLastTrxModalOpen(false)
  }
  const handleCancel = () => {
    setIsLastTrxModalOpen(false)
  }
  let { columns, records } = dataModalLastTrx()

  return (
    <>
      <Modal 
        width={'74%'}
        title="MyBank Data"
        open={isLastTrxModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}>
      <Table dataSource={records} columns={columns} scroll={{ x: 10 }} />

      </Modal>
    </>
  )
}

export default ModalLastTrx
