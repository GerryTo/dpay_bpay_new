import { Checkbox, Flex, Form, Input, List, Modal, Table, Typography } from 'antd'
import React, { useState } from 'react'

const { Text } = Typography


const ModalEdit = ({ isEditModalOpen, setIsEditModalOpen }) => {
    const handleOk = () => {
        setIsEditModalOpen(false)
    }
    const handleCancel = () => {
        setIsEditModalOpen(false)
    }
  return (
    <>
    <Modal width={"74%"} title="Login Form" open={isEditModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form layout='vertical' >
            <Form.Item label="User Login">
                <Input placeholder='User Login'/>
            </Form.Item>
            <Form.Item label="Password">
                <Input placeholder='Password'/>
            </Form.Item>
            <Form.Item label="Active">
                <Input placeholder='Active'/>
            </Form.Item>
            <Form.Item label="Login Type">
                <Input placeholder='Login Type'/>
            </Form.Item>
            <Form.Item label="Merchant">
                <Input placeholder='Merchant'/>
            </Form.Item>
            <Form.Item label="Phone Number">
                <Input placeholder='Phone Number'/>
            </Form.Item>
            <Form.Item label="Agent Name">
                <Input placeholder='Agent Name'/>
            </Form.Item>
            <Form.Item label="Alias">
                <Input placeholder='Alias'/>
            </Form.Item>
            <Form.Item label="Login Status">
                <Input placeholder='Login Status'/>
            </Form.Item>
            <Form.Item label="Use Credit">
                <Input placeholder='Use Credit'/>
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
