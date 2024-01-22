import React, { useState } from 'react'
import a from '../../../tmpdata/db.json'
import Modal from 'antd/es/modal/Modal'
import { Button } from 'antd'
const dataWithdrawSettingTableData = () => {
  const [buttonText, setButtonText] = useState('Disabled');
  const [buttonColor, setButtonColor] = useState('default');

  const handleButtonClick = () => {
    // Toggle text and color
    if (buttonText === 'Disabled') {
      setButtonText('Enabled');
      setButtonColor('primary'); // You can set any color you want
    } else {
      setButtonText('Disabled');
      setButtonColor('default');
    }
  }
  let tmpDataColumn = [
    {
      title: 'Bank Code',
      dataIndex: 'bank_code',
      key: 'bank_code'
    },
    {
      title: 'Is Enabled',
      dataIndex: 'is_enabled',
      key: 'is_enabled'
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: record => (
        <>
      <Button onClick={handleButtonClick} type={buttonColor}>
        {buttonText}
      </Button>        
      </>
      )
    }
  ]
  return { column: tmpDataColumn, records: a, buttonText, setButtonText, buttonColor, setButtonColor }
}

export default dataWithdrawSettingTableData
