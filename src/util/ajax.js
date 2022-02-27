import axios from 'axios'
import { stringify } from 'qs'

const host = location.host.includes('test-3d-zuanshi.semoh.cn') ? 'http://test-zuanshi.semoh.cn/' : 'http://zuanshi.semoh.cn/'
// const host = 'https://yapi.kyy1996.com/mock/29';

axios.defaults.baseURL = host

const getRequest = method => {
  return ({ url, data, options = {}, isForm = true }) => {
    const tokenHeader = {}

    if (localStorage.getItem('token') && !url.includes('jcd.bavlo.com')) {
      tokenHeader.token = localStorage.getItem('token')
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
