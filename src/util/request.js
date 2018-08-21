import fetch from 'isomorphic-fetch'

import SnackbarSingleton from '../components/snackbar-singleton'

const dataPath = process.env.NODE_ENV === 'development' ? '/wechatyy/src/data' : '/wechatyy/data'

export default async function request (url, data, option, codes) {
  if (Array.isArray(option)) {
    codes = option
    option = null
  }

  if (!Array.isArray(codes)) {
    codes = [401, 0]
  }

  option = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    credentials: 'include',
    ...option
  }

  const response = await fetch(`${dataPath}/${url}.cgi`, option)

  if (response.status !== 200) {
    SnackbarSingleton.show('网络异常，请稍后重试')
    throw new Error(`Request Error: (${url}) Network Error`)
  }

  const result = await response.json()
  if (!codes.includes(result.code)) {
    if (result.code === 401) {
      await SnackbarSingleton.show('请先登录')
      window.location.replace('#/login')
      throw new Error(`Request Error: (${url}) Forbidden`)
    }

    SnackbarSingleton.show(result.message || '系统异常')
    throw new Error(`Request Error: (${url}) ${result.message}`)
  }

  return result
}
