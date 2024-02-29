import {
  Checkbox,
  Divider,
  Flex,
  Form,
  Input,
  Modal,
  Space,
  Typography
} from 'antd'
import React, { useState } from 'react'

const { Text } = Typography
const init = {
  accountNo: '123'
}
const CheckboxGroup = Checkbox.Group
const plainOptions = ['BJBDT', 'ICCWBDT', 'ICCWBDT1']
const defaultCheckedList = []

const ModalEdit = ({ setIsEditModalOpen, isEditModalOpen, isRecord }) => {
  console.log(isRecord)
  const handleOk = () => {
    setIsEditModalOpen(false)
  }
  const handleCancel = () => {
    setIsEditModalOpen(false)
  }
  const handleChange = value => {
    console.log(value)
  }

  const [checkedList, setCheckedList] = useState(defaultCheckedList)
  const checkAll = plainOptions.length === checkedList.length
  const indeterminate =
    checkedList.length > 0 && checkedList.length < plainOptions.length
  const onChange = list => {
    setCheckedList(list)
  }
  const onCheckAllChange = e => {
    setCheckedList(e.target.checked ? plainOptions : [])
  }
  return (
    <>
      <Modal
        width={'74%'}
        title="MyBank Data"
        open={isEditModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        isRecord
      >
        <Form
          layout="horizontal"
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Form layout="vertical" style={{ width: '32%' }}>
            <Form.Item label="Account No." style={{ paddingBottom: '5%' }}>
              <Input placeholder="Account No." />
            </Form.Item>
            <Form.Item label="Account ID" style={{ paddingBottom: '5%' }}>
              <Input placeholder="Account ID" />
            </Form.Item>
            <Form.Item label="Branch" style={{ paddingBottom: '5%' }}>
              <Input placeholder="Branch" />
            </Form.Item>
            <Form.Item label="Status" style={{ paddingBottom: '5%' }}>
              <Input placeholder="Status" />
            </Form.Item>
            <Form.Item
              label="Daily Withdraw Limit"
              style={{ paddingBottom: '5%' }}
            >
              <Input placeholder="Daily Withdraw Limit" />
            </Form.Item>
            <Form.Item label="Max Deposit" style={{ paddingBottom: '5%' }}>
              <Input placeholder="Max Deposit" />
            </Form.Item>
            <Form.Item
              label="Balance Different Criteria"
              style={{ paddingBottom: '5%' }}
            >
              <Input placeholder="Balance Different Criteria" />
            </Form.Item>
          </Form>
          <Form layout="vertical" style={{ width: '32%' }}>
            <Form.Item label="Account Name" style={{ paddingBottom: '5%' }}>
              <Input placeholder="Account Name" />
            </Form.Item>
            <Form.Item label="IFSC" style={{ paddingBottom: '5%' }}>
              <Input placeholder="IFSC" />
            </Form.Item>
            <Form.Item label="User Login" style={{ paddingBottom: '5%' }}>
              <Input placeholder="User Login" />
            </Form.Item>
            <Form.Item label="Type" style={{ paddingBottom: '5%' }}>
              <Input placeholder="Type" />
            </Form.Item>
            <Form.Item label="Phone Number" style={{ paddingBottom: '5%' }}>
              <Input placeholder="Phone Number" />
            </Form.Item>
            <Form.Item
              label="Agent Commission Deposit(%)"
              style={{ paddingBottom: '5%' }}
            >
              <Input placeholder="Agent Commission Deposit(%)" />
            </Form.Item>
            <Form.Item
              label="Always Chosen for Available Account"
              style={{ paddingBottom: '5%' }}
            >
              <Input placeholder="Always Chosen for Available Account" />
            </Form.Item>
          </Form>
          <Form layout="vertical" style={{ width: '33%' }}>
            <Form.Item label="Alias" style={{ paddingBottom: '5%' }}>
              <Input placeholder="Alias" />
            </Form.Item>
            <Form.Item label="Bank" style={{ paddingBottom: '5%' }}>
              <Input placeholder="Bank" />
            </Form.Item>
            <Form.Item label="User Password" style={{ paddingBottom: '5%' }}>
              <Input placeholder="User Password" />
            </Form.Item>
            <Form.Item
              label="Daily Deposit Limit"
              style={{ paddingBottom: '5%' }}
            >
              <Input placeholder="Daily Deposit Limit" />
            </Form.Item>
            <Form.Item label="Min. Deposit" style={{ paddingBottom: '5%' }}>
              <Input placeholder="Min. Deposit" />
            </Form.Item>
            <Form.Item
              label="Agent Commission Withdraw(%)"
              style={{ paddingBottom: '5%' }}
            >
              <Input placeholder="Agent Commission Withdraw(%)" />
            </Form.Item>
            <Form.Item label="Appium Online" style={{ paddingBottom: '5%' }}>
              <Input placeholder="Appium Online" />
            </Form.Item>
          </Form>
        </Form>
        <Space direction="vertical">
          <Text>List Merchant</Text>
          <Checkbox
            indeterminate={indeterminate}
            onChange={onCheckAllChange}
            checked={checkAll}
          >
            Check all
          </Checkbox>
          <CheckboxGroup
            options={plainOptions}
            value={checkedList}
            onChange={onChange}
          />
        </Space>
      </Modal>
    </>
  )
}

export default ModalEdit
