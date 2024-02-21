import axios from 'axios'

const BASEURL = 'http://localhost/backend-sispay-new-php/services'

export function apiGetMybankList(params) {
  try {
    const response = axios({
      method: 'post',
      url: BASEURL + '/mybank/list',
      data : params,
      })
    return response
  } catch (err) {
    throw err
  }
}

export function apiGetUserList(params) {
  try {
    const response = axios ({
      method: 'post',
      url: BASEURL + '/user-management/list',
      data : params,
    })
    return response
  } catch (err) {
    throw err
  }
}
