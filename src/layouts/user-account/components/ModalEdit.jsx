import { Checkbox, Flex, Form, Input, List, Modal, Select, Table, Typography } from 'antd'
import React, { useState } from 'react'

const { Text } = Typography


const ModalEdit = ({ isEditModalOpen, setIsEditModalOpen }) => {
    const handleOk = () => {
        setIsEditModalOpen(false)
    }
    const handleCancel = () => {
        setIsEditModalOpen(false)
    }
    const handleChange = value => {
        
    }
  return (
    <>
    <Modal width={"74%"} title="Login Form" open={isEditModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form layout='vertical' >
        <Form.Item label="User Login">
                <Input placeholder='User Login'/>
            </Form.Item>
            <Form.Item label="Password">
                <Input placeholder='Password' type='password'/>
            </Form.Item>
            <Form.Item label="Active">
                <Select defaultValue="yes" onChange={handleChange} options={[
                    {
                        value:"yes",
                        label:"Yes"
                    },
                    {
                        value:"no",
                        label:"No"
                    }
                ]}/>
            </Form.Item>
            <Form.Item label="Login Type">
                <Select defaultValue="Select Login Type" onChange={handleChange} options={[
                    {
                        value:"admin",
                        label:"Admin"
                    },
                    {
                        value:"merchant",
                        label:"Merchant"
                    },
                    {
                        value:"reseller",
                        label:"Reseller"
                    },
                    {
                        value:"agent",
                        label:"Agent"
                    }
                ]}/>
            </Form.Item>
            <Form.Item label="Merchant">
                <Select defaultValue="Select Merchant" onChange={handleChange} options={[
                    {
                        value:"merchant1",
                        label:"Merchant 1"
                    },
                    {
                        value:"merchant2",
                        label:"Merchant 2"
                    }
                ]}/>
            </Form.Item>
            <Form.Item label="Phone Number">
                <Input placeholder='Phone Number' type='number'/>
            </Form.Item>
            <Form.Item label="Agent Name">
                <Input placeholder='Agent Name'/>
            </Form.Item>
            <Form.Item label="Alias">
                <Input placeholder='Alias'/>
            </Form.Item>
            <Form.Item label="Login Status">
                <Select defaultValue="Select Login Status" onChange={handleChange} options={[
                    {
                        value:"cp",
                        label:"CP Login"
                    },
                    {
                        value:"app",
                        label:"APP Login"
                    },
                    {
                        value:"cpapp",
                        label:"CP & APP Login"
                    }
                ]}/>
            </Form.Item>
            <Form.Item label="Use Credit">
                <Select defaultValue="" onChange={handleChange} options={[
                    {
                        value:"yes",
                        label:"Yes"
                    },
                    {
                        value:"no",
                        label:"No"
                    }
                ]}/>
            </Form.Item>
        </Form>
        <Form.Item label="CP Access">
        <Flex gap="middle" horizontal>
        <Flex gap="middle" vertical>
                <Checkbox>Login List</Checkbox>
                <Checkbox>Master Merchant</Checkbox>
                <Checkbox>Master Mybank</Checkbox>
                <Checkbox>Transaction Merchant</Checkbox>
                </Flex>
                <Flex gap="middle" vertical>
                <Checkbox>Withdraw List</Checkbox>
                <Checkbox>Transaction Merchant - Company</Checkbox>
                <Checkbox>Transaction Account - Company</Checkbox>
                <Checkbox>Reseller - Transaction Detail</Checkbox>
                </Flex>
                <Flex gap="middle" vertical>
                <Checkbox>Reseller - List Merchant</Checkbox>
                <Checkbox>Request Form</Checkbox>
                <Checkbox>Deposit Queue</Checkbox>
                </Flex>
                <Flex gap="middle" vertical>
                <Checkbox>Transaction by Account List</Checkbox>
                <Checkbox>Transaction by Id NA</Checkbox>
                <Checkbox>Update Transaction</Checkbox>
                </Flex>
        </Flex>
        </Form.Item>
    </Modal>
    </>
  )
}

export default ModalEdit
