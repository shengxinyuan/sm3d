import axios from 'axios'
import { stringify } from 'qs'

// 正式环境是dis 其他都是nxm
const host = location.host.includes('zuanshi.dis.wanheweb.com') ? 'http://zuanshi.dis.wanheweb.com/' : 'http://zuanshi.nxm.wanheweb.com/'

axios.defaults.baseURL = host;

const getRequest = method => {
  return ({ url, data, options = {}, isForm = true }) => {
    let tokenHeader = {}

    if (localStorage.getItem('token') && !url.includes('jcd.bavlo.com')) {
      tokenHeader.token = localStorage.getItem('token');
    }
    return axios({
      url,
      method,
      ...(method === 'POST'
        ? { data: isForm ? stringify(data) : data }
        : { }),
      params: method === 'GET' ? data : options.params,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': isForm
          ? 'application/x-www-form-urlencoded; charset=UTF-8'
          : 'application/json',
        ...options.headers,
        ...tokenHeader
      }
    })
      .then(res => {
        if (typeof res.data !== 'object') {
          return Promise.reject(res)
        }
        if (res.data.errcode) {
          return Promise.reject(res.data)
        }

        return res.data
      })
      .catch(err => {
        return Promise.reject(err)
      })
  }
}

export const get = getRequest('GET')

export const post = getRequest('POST')
