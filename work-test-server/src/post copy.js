const https = require('https')
const http = require('http')
const doc = require('./doc.json')

const data = JSON.stringify({
  todo: '做点事情'
})

const options = {
  hostname: 'localhost',
  port: 4000,
  path: '/exportImage',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  },
  body:{
      width: 100,
      height: 100,
      file_name: '1',
      file_path: '/',
      doc: doc,
      params: '{}'
  }
}

const req = http.request(options, res => {
  console.log(`状态码: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.write(data)
req.end()