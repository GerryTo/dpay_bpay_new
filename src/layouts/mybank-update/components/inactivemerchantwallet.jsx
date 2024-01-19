import { Button, Select, Space } from 'antd'
import React from 'react'

const handleChange = value => {
  console.log(`selected ${value}`)
}
const InactiveMerchantWallet = () => {
  return (
    <>
      <div>
        <Space direction="vertical" size={'large'}>
          <b>
            *This function unselects or selects specific merchant for specific
            bank (merchant tickbox in mybank acc)<p></p> Example: Select
            Merchant X , Bank BKASH , Status Active. This makes merchant X be
            selected for ALL active bkash.
          </b>
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

export default InactiveMerchantWallet
