import { Form, Modal, Select } from 'antd'
import React, { useState } from 'react'

const ModalSuccess = ({isSuccessModalOpen, setIsSuccessModalOpen}) => {
    const handleOk = () => {
        setIsSuccessModalOpen(false)
    }
    const handleCancel = () => {
        setIsSuccessModalOpen(false)
    }
    const handleChange = (value) => {
        console.log(`selected ${value}`)
    }
  return (
    <>    
    <Modal title="Success" width={"50%"} open={isSuccessModalOpen} onOk={handleOk} onCancel={handleCancel} okText="Submit">
    <Form layout='vertical'>
      <Form.Item label="Account Source">
      <Select defaultValue="" onChange={handleChange} options={[
        {
          label:"Account 1",
          value:"account1"
        },
        {
          label:"Account 2",
          value:"account2"
        }
      ]}/>
      </Form.Item>
    </Form>
    </Modal>
    </>

  )
}

export default ModalSuccess
