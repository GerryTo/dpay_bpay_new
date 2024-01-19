import { Form, Input, Modal, Select, Typography } from 'antd'
import React from 'react'

const {Text} = Typography
const ModalAdjustIn = ({setIsAdjustInModalOpen, isAdjustInModalOpen}) => {
    const handleOk = () => {
        setIsAdjustInModalOpen(false)
    }
    const handleCancel = () => {
        
        setIsAdjustInModalOpen(false)
    }
    const handleChange = value => {
        console.log(value)
    }
  return (
    <>
    <Modal width={"74%"} title="Credit Adjustment Form" open={isAdjustInModalOpen} onCancel={handleCancel} onOk={handleOk} okText="Proceed">
        <Form layout='vertical'>
            <Form.Item label="Username">
                <Input placeholder='Username'/>
            </Form.Item>
            <Form.Item label="Name">
                <Input placeholder='Name'/>
            </Form.Item>
            <Form.Item label="Current Credit">
                <Input type="number" placeholder='Current Credit'/>
            </Form.Item>
            <Form.Item label="Adjustment Type">
                <Text>In</Text>
            </Form.Item>
            <Form.Item label="Adjustment Account">
                <Select defaultValue="" onChange={handleChange} options={[
                    {
                        label:"Account 1",
                        value:"account1"
                    }
                ]}/>
            </Form.Item>
            <Form.Item label="Adjustment Amount">
                <Input placeholder='Adjustment Amount' type='number'/>
            </Form.Item>
            <Form.Item label="Note">
                <Input placeholder='Input Note Here'/>
            </Form.Item>
        </Form>
    </Modal>
    </>
  )
}

export default ModalAdjustIn
