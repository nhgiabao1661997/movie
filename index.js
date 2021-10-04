const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const rootRouter = require('./src/routes/rootRouter')

dotenv.config()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/static', express.static(path.join(__dirname, 'public')))

app.use('/api', rootRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
