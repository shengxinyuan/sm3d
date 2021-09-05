export function cc (s) {
  if (/[^0-9.]/.test(s)) return 'invalid value'
  s = s.replace(/^(\d*)$/, '$1.')
  s = (s + '00').replace(/(\d*\.\d\d)\d*/, '$1')
  s = s.replace('.', ',')
  var re = /(\d)(\d{3},)/
  while (re.test(s)) { s = s.replace(re, '$1,$2') }
  s = s.replace(/,(\d\d)$/, '.$1')
  return '￥' + s.replace(/^\./, '0.')
}

const loeded = {}

export function cssLoader (url) {
  const status = loeded[url] || false
  if (status) {
    return Promise.resolve()
  }
  const style = document.createElement('link')
  style.rel = 'stylesheet'
  style.href = url
  document.head.appendChild(style)
  return new Promise((resolve) => {
    style.addEventListener(
      'load',
      () => {
        loeded[url] = true
        resolve()
      }
    )
  })
}

export function jsLoader (url) {
  const status = loeded[url] || false
  if (status) {
    return Promise.resolve()
  }
  const script = document.createElement('script')
  script.src = url
  document.body.appendChild(script)
  return new Promise((resolve) => {
    script.addEventListener(
      'load',
      () => {
        loeded[url] = true
        resolve()
      })
  })
}
