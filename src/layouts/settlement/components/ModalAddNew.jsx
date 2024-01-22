import { DatePicker, Form, Input, Modal, Select, Space } from 'antd'
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
      <Modal title="Request Manual Form" width={"74%"} open={isAddNewModalOpen} onOk={handleOk} onCancel={handleCancel} okText="Save">
      <Form title='Phone Whitelist' layout='vertical'>
            <Space direction='vertical' style={{width:"100%"}}>
                <Form.Item label="Type">
                    <Select defaultValue="topup" onChange={handleChange} options={[
                        {
                            label:"Top Up",
                            value:"topup"
                        },
                        {
                            label:"Settlement",
                            value:"settlement"
                        }
                    ]}/>
                </Form.Item>
                <Form.Item label="Bank Name">
                    <Input placeholder='Input Bank Name'/>
                </Form.Item>
                <Form.Item label="Bank Account">
                    <Input placeholder='Input Bank Account'/>
                </Form.Item>
                <Form.Item label="Bank Account Name">
                    <Input placeholder='Input Bank Account Name'/>
                </Form.Item>
                <Form.Item label="Amount">
                    <Input placeholder='Input Amount'/>
                </Form.Item>
                <Form.Item label="Date">
                    <DatePicker/>
                </Form.Item>
                <Form.Item label="Notes">
                    <Input placeholder='Input Notes'/>
                </Form.Item>
            </Space>
        </Form>

      </Modal>
    </>
  )
}

export default ModalAddNew
