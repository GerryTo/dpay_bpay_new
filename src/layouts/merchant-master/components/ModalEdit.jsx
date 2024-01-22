import { Form, Input, Modal, Select, Space } from 'antd'
import React from 'react'

const ModalEdit = ({setIsEditModalOpen, isEditModalOpen}) => {
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
    <Modal width={"60%"} title="Master Merchant Form" open={isEditModalOpen} onOk={handleOk} onCancel={handleCancel} okText="Save">
        <Form layout='vertical'>
            <Space direction='horizontal' size="large">
                <Form.Item label="Merchant Code">
                    <Input placeholder='Merchant Code'/>
                </Form.Item>
                <Form.Item label="Merchant Name">
                    <Input placeholder='Merchant Name'/>
                </Form.Item>
                <Form.Item label="Mobile Number">
                    <Input placeholder='Mobile Number'/>
                </Form.Item>
                <Form.Item label="Email">
                    <Input placeholder='Email'/>
                </Form.Item>
            </Space>
            <Space direction='horizontal' size="large">
                <Form.Item label="Website Address">
                    <Input placeholder='Website Address'/>
                </Form.Item>
                <Form.Item label="Secure Code">
                    <Input placeholder='Secure Code'/>
                </Form.Item>
                <Form.Item label="Country">
                    <Select defaultValue="Select Country" onChange={handleChange} options={[
                        {
                            label:"Bangladesh",
                            value:"bangladesh"
                        }
                    ]}/>
                </Form.Item>
                <Form.Item label="Currency">
                    <Select defaultValue="Select Currency" onChange={handleChange} options={[
                        {
                            label:"Bangladesh Taka",
                            value:"bangladeshtaka"
                        }
                    ]}/>                
                </Form.Item>
                <Form.Item label="Timezone">
                    <Input type='number' placeholder='Timezone' defaultValue={"8"}/>
                </Form.Item>
            </Space>
            <Space direction='horizontal' size="large">
                <Form.Item label="Opening Balance">
                    <Input type="number" placeholder='Opening Balance'/>
                </Form.Item>
                <Form.Item label="Withdraw Fee Type">
                    <Select defaultValue="Withdraw Fee Type" onChange={handleChange} options={[
                        {
                            label:"Percentage",
                            value:"percentage"
                        },
                        {
                            label:"Fixed Value",
                            value:"fixed"
                        }
                    ]}/>
                </Form.Item>
                <Form.Item label="Withdraw Fee Value">
                    <Input type="number" placeholder='Withdraw Fee Value'/>
                </Form.Item>
                <Form.Item label="Deposit Fee Type">
                    <Select defaultValue="Deposit Fee Type" onChange={handleChange} options={[
                        {
                            label:"Percentage",
                            value:"percentage"
                        },
                        {
                            label:"Fixed Value",
                            value:"fixed"
                        }
                    ]}/>
                </Form.Item>
                <Form.Item label="Deposit Fee Value">
                    <Input type="number" placeholder='Deposit Fee Value'/>
                </Form.Item>            
                </Space>
            <Space direction='horizontal' size="large">
                <Form.Item label="Customer Minimum Withdraw">
                    <Input type="number" placeholder='Customer Minimum Withdraw'/>
                </Form.Item>
                <Form.Item label="Customer Deposit Fee Type">
                    <Select defaultValue="Customer Deposit Fee Type" onChange={handleChange} options={[
                        {
                            label:"Percentage",
                            value:"percentage"
                        },
                        {
                            label:"Fixed Value",
                            value:"fixed"
                        }
                    ]}/>
                </Form.Item>
                <Form.Item label="Customer Deposit Fee Value">
                    <Input type="number" placeholder='Customer Deposit Fee Value'/>
                </Form.Item>            
                </Space>
            <Space direction='horizontal' size="large">
                <Form.Item label="Reseller ID">
                    <Input type="number" placeholder='Reseller ID'/>
                </Form.Item>
                <Form.Item label="Reseller Commission Type">
                    <Select defaultValue="Reseller Commission Type" onChange={handleChange} options={[
                        {
                            label:"Percentage",
                            value:"percentage"
                        },
                        {
                            label:"Fixed Value",
                            value:"fixed"
                        }
                    ]}/>
                </Form.Item>
                <Form.Item label="Reseller Commission Value">
                    <Input type="number" placeholder='Customer Deposit Fee Value'/>
                </Form.Item>
                </Space>
        </Form>
    </Modal>
    </>
  )
}

export default ModalEdit
