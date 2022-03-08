const axios = require('axios')
const doc = require('./doc.json')

axios({
    method: 'post',
    url: 'http://localhost:4000/exportImage',
    // headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    // },
    data: {
        width: 100,
        height: 100,
        doc: JSON.stringify(doc),
        params: JSON.stringify({'canvas_scale': 1})
    }
}).then(res => {
    console.log(`状态码: ${res.statusCode}`)
    console.log(res)
}).catch(error => {
    console.error(error)
})

// node .\puppeteer\httpPuppeteerMicro.js