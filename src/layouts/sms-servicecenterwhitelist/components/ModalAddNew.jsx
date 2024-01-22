import { Form, Input, Modal, Select, Space } from 'antd'
import React from 'react'

const ModalAddNew = ({isAddNewModalOpen, setIsAddNewModalOpen}) => {
    const handleOk = () => {
        setIsAddNewModalOpen(false)
    }
    const handleCancel = () => {
        setIsAddNewModalOpen(false)
    }
    const handleChange = value => {
        console.log(value)
    }
  return (
    <>
      <Modal title="Service Center Whitelist Form" width={"74%"} open={isAddNewModalOpen} onOk={handleOk} onCancel={handleCancel} okText="Save">
      <Form title='Service Center Whitelist' layout='vertical'>
            <Space direction='vertical' style={{width:"100%"}}>
                <Form.Item label="Service Center">
                    <Input type='number' placeholder='Service Center'/>
                </Form.Item>
                <Form.Item label="Description">
                    <Input placeholder='Description'/>
                </Form.Item>
                <Form.Item label="Is Active">
                    <Select defaultValue="inactive" onChange={handleChange} options={[
                        {
                            label:"Active",
                            value:"active"
                        },
                        {
                            label:"Inactive",
                            value:"inactive"
                        }
                    ]}/>
                </Form.Item>
            </Space>
        </Form>
      </Modal>
    </>
  )
}

export default ModalAddNew
