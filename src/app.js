if (process.env.NODE_ENV === 'production') {
  require('@google-cloud/trace-agent').start();
  require('@google-cloud/debug-agent').start({ allowExpressions: true })
}

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World! version 4')
})

app.get('/health', (req, res) => {
  res.send('ok')
})

app.listen(8080, () => {
  console.log('Listening on port 8080')
})
