import { Button, Select, Space } from 'antd'
import React from 'react'

const handleChange = value => {
  console.log(`selected ${value}`)
}
const ChangeAgentStatus = () => {
  return (
    <>
      <div>
        <Space direction="vertical" size={'large'}>
          <b>
            *This function changes all Active agent status from either deposit
            to withdraw to deposit & withdraw.
          </b>
          <table width={'50%'}>
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
              <td>Type :</td>
              <td>
                <Select
                  defaultValue="depositwithdraw"
                  style={{
                    width: 120
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: 'depositwithdraw',
                      label: 'Deposit & Withdraw'
                    },
                    {
                      value: 'deposit',
                      label: 'Deposit'
                    },
                    {
                      value: 'withdraw',
                      label: 'Withdraw'
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

export default ChangeAgentStatus
