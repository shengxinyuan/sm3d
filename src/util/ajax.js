import axios from 'axios'
import { stringify } from 'qs'

axios.defaults.baseURL = 'http://zuanshi.nxm.wanheweb.com/';
// axios.defaults.baseURL = 'http://zuanshi.dis.wanheweb.com/';

const getRequest = method => {
  return ({ url, data, options = {}, isForm = true }) => {
    let tokenHeader = {}
    // console.log(123, window.top, window.top, window.parent === window.parent)
    // if (window.parent.uni && window.parent.uni.getStorageSync) {
    //   tokenHeader.token = window.parent.uni.getStorageSync('token')
    // }
    tokenHeader = localStorage.getItem('token');
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
