import { Checkbox, Flex, Form, Input, Modal, Space, Typography } from 'antd'
import React, { useState } from 'react'

const { Text } = Typography
const init = {
  accountNo: '123'
}

const ModalEdit = ({ setIsEditModalOpen, isEditModalOpen, isRecord }) => {
  const [newdata, setData] = useState(init)
  const handleOk = () => {
    setIsEditModalOpen(false)
  }
  const handleCancel = () => {
    setIsEditModalOpen(false)
  }
  const handleChange = (name, value) => {
    console.log(value)
    setData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  return (
    <>
      <Modal
        width={'74%'}
        title="MyBank Data"
        open={isEditModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          layout="horizontal"
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Form layout="vertical" style={{ width: '32%' }}>
            <Form.Item label="Account No." style={{ paddingBottom: '5%' }}>
              <Input
                placeholder="Account No."
                value={newdata.accountNo}
                onChange={(e) =>
                  handleChange("accountNo", e.currentTarget.value)
                }
              />
            </Form.Item>
            <Form.Item label="Account ID" style={{ paddingBottom: '5%' }}>
              <Input placeholder="Account ID" value={isRecord.v_status} />
            </Form.Item>
            <Form.Item label="Branch" style={{ paddingBottom: '5%' }}>
              <Input placeholder="Branch" value={isRecord.v_status} />
            </Form.Item>
            <Form.Item label="Status" style={{ paddingBottom: '5%' }}>
              <Input placeholder="Status" value={isRecord.v_status} />
            </Form.Item>
            <Form.Item
              label="Daily Withdraw Limit"
              style={{ paddingBottom: '5%' }}
            >
              <Input
                placeholder="Daily Withdraw Limit"
                value={isRecord.v_status}
              />
            </Form.Item>
            <Form.Item label="Max Deposit" style={{ paddingBottom: '5%' }}>
              <Input placeholder="Max Deposit" value={isRecord.v_status} />
            </Form.Item>
            <Form.Item
              label="Balance Different Criteria"
              style={{ paddingBottom: '5%' }}
            >
              <Input
                placeholder="Balance Different Criteria"
                value={isRecord.v_status}
              />
            </Form.Item>
          </Form>
          <Form layout="vertical" style={{ width: '32%' }}>
            <Form.Item label="Account Name" style={{ paddingBottom: '5%' }}>
              <Input placeholder="Account Name" value={isRecord.account_name} />
            </Form.Item>
            <Form.Item label="IFSC" style={{ paddingBottom: '5%' }}>
              <Input placeholder="IFSC" value={isRecord.v_status} />
            </Form.Item>
            <Form.Item label="User Login" style={{ paddingBottom: '5%' }}>
              <Input placeholder="User Login" value={isRecord.v_status} />
            </Form.Item>
            <Form.Item label="Type" style={{ paddingBottom: '5%' }}>
              <Input placeholder="Type" value={isRecord.v_status} />
            </Form.Item>
            <Form.Item label="Phone Number" style={{ paddingBottom: '5%' }}>
              <Input placeholder="Phone Number" value={isRecord.v_status} />
            </Form.Item>
            <Form.Item
              label="Agent Commission Deposit(%)"
              style={{ paddingBottom: '5%' }}
            >
              <Input
                placeholder="Agent Commission Deposit(%)"
                value={isRecord.v_status}
              />
            </Form.Item>
            <Form.Item
              label="Always Chosen for Available Account"
              style={{ paddingBottom: '5%' }}
            >
              <Input
                placeholder="Always Chosen for Available Account"
                value={isRecord.v_status}
              />
            </Form.Item>
          </Form>
          <Form layout="vertical" style={{ width: '33%' }}>
            <Form.Item label="Alias" style={{ paddingBottom: '5%' }}>
              <Input placeholder="Alias" value={isRecord.alias} />
            </Form.Item>
            <Form.Item label="Bank" style={{ paddingBottom: '5%' }}>
              <Input placeholder="Bank" value={isRecord.alias} />
            </Form.Item>
            <Form.Item label="User Password" style={{ paddingBottom: '5%' }}>
              <Input placeholder="User Password" value={isRecord.v_status} />
            </Form.Item>
            <Form.Item
              label="Daily Deposit Limit"
              style={{ paddingBottom: '5%' }}
            >
              <Input
                placeholder="Daily Deposit Limit"
                value={isRecord.v_status}
              />
            </Form.Item>
            <Form.Item label="Min. Deposit" style={{ paddingBottom: '5%' }}>
              <Input placeholder="Min. Deposit" value={isRecord.v_status} />
            </Form.Item>
            <Form.Item
              label="Agent Commission Withdraw(%)"
              style={{ paddingBottom: '5%' }}
            >
              <Input
                placeholder="Agent Commission Withdraw(%)"
                value={isRecord.v_status}
              />
            </Form.Item>
            <Form.Item label="Appium Online" style={{ paddingBottom: '5%' }}>
              <Input placeholder="Appium Online" value={isRecord.v_status} />
            </Form.Item>
          </Form>
        </Form>
        <Space direction='vertical'>
        <Text>List Merchant</Text>
        <Checkbox>Check All</Checkbox>
        <Checkbox>BJBDT</Checkbox>
        <Checkbox>ICCWBDT</Checkbox>
        </Space>
      </Modal>
    </>
  )
}

export default ModalEdit
