// const DOT = '.'
const defaultDomain = '.pippi.finance'
// const getSubDomain = () => {
//   const { hostname } = window.location
//   const domains = hostname.split('.')
//   if (domains.length > 2) {
//     return domains.reduce((pre, cur, index) => {
//       if (index === 0) {
//         return ''
//       }
//       if (index === 1) {
//         return cur
//       }
//       return `${pre}.${cur}`
//     })
//   }

//   return hostname
// }

const setCookie = (name, value, days = 365, shouldUseSubDomain = false) => {
  const date = new Date()
  let expires = ''
  if (days) {
    // eslint-disable-next-line no-mixed-operators
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    expires = `; expires=${date.toUTCString()}`
  }
  const domain = shouldUseSubDomain ? `; domain=${defaultDomain}` : ''
  document.cookie = `${name}=${value}${expires}${domain}; path=/`
}

const getCookie = (name, { cookie = '' } = {}) => {
  let cookieStr = ''
  if (typeof document === 'undefined') {
    cookieStr = cookie
  } else {
    cookieStr = document.cookie
  }

  const nameEQ = `${name}=`
  const ca = cookieStr.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length)
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length)
    }
  }
  return null
}

const deleteCookie = name => {
  setCookie(name, '', -1)
}

export default {
  setCookie,
  getCookie,
  deleteCookie
}
