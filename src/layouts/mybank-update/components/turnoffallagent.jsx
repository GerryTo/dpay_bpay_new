import React from 'react'
import { Space, Select, Button } from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons'
const handleChange = value => {
  console.log(`selected ${value}`)
}
const TurnOffAllAgent = () => {
  // Assuming menuProps and handleButtonClick are defined somewhere

  return (
    <>
      <div>
        <Space direction="vertical" size={'large'}>
          <div>
            <b>
              *This function turns on/off all specific wallet
              (BKASH/NAGAD/ROCKET) that is currently INACTIVE/ACTIVE
            </b>
          </div>
          <table width={'50%'}>
            <tr>
              <td>Select Merchant :</td>
              <td>
                <Select
                  defaultValue="all"
                  style={{
                    width: 120
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: 'all',
                      label: 'All'
                    }
                  ]}
                />
              </td>
            </tr>
            <tr>
              <td>Bank :</td>
              <td>
                <Select
                  defaultValue="all"
                  style={{
                    width: 120
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: 'all',
                      label: 'All'
                    },
                    {
                      value: 'nagad',
                      label: 'NAGAD'
                    }
                  ]}
                />
              </td>
            </tr>
            <tr>
              <td>Status :</td>
              <td>
                <Select
                  defaultValue="active"
                  style={{
                    width: 120
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: 'active',
                      label: 'Active'
                    },
                    {
                      value: 'nonactive',
                      label: 'Non-Active'
                    }
                  ]}
                />
              </td>
            </tr>
          </table>
        </Space>
      </div>
      <Button type="primary">Submit</Button>
    </>
  )
}

export default TurnOffAllAgent
