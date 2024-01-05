import axios from 'axios'

const BASEURL = 'https://test123domain.com/sispay/webservices'

export function apiGetMybankList() {
  try {
    const response = axios({
      method: 'post',
      url: BASEURL + '/getMasterMyBank.php',
      data: {},
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      }
    })
    return response
  } catch (err) {
    throw err
  }
}
