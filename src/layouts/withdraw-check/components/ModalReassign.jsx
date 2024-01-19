import { Form, Select } from 'antd'
import Modal from 'antd/es/modal/Modal'
import React from 'react'

const ModalReassign = ({isReassignModalOpen, setIsReassignModalOpen}) => {
    const handleOk = () => {
        setIsReassignModalOpen(false)
    }
    const handleCancel = () => {
        setIsReassignModalOpen(false)
    }
    const handleChange = (value) => {
      console.log(`selected ${value}`)
    }
  return (
    <>
    <Modal title="Withdraw Assignment" width={"50%"} open={isReassignModalOpen} onOk={handleOk} onCancel={handleCancel} okText="Submit">
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

export default ModalReassign

