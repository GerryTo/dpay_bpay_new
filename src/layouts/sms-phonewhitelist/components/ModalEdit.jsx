import { Form, Input, Modal, Select, Space } from 'antd'
import React from 'react'

const ModalEdit = ({isEditModalOpen, setIsEditModalOpen}) => {
  const handleOk = () => {
    setIsEditModalOpen(false)
  }
  const handleCancel = () => {
    setIsEditModalOpen(false)
  }
  const handleChange = value => {
    console.log(value)
  }
    return (
    <>
    <Modal title="Phone Whitelist Form" width={"74%"} open={isEditModalOpen} onCancel={handleCancel} onOk={handleOk} okText="Save">
        <Form title='Phone Whitelist' layout='vertical'>
            <Space direction='vertical' style={{width:"100%"}}>
                <Form.Item label="Phone Number">
                    <Input type='number' placeholder='Phone Number'/>
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

export default ModalEdit
