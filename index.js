require('dotenv').config()
const express = require('express')
const mysql = require('mysql2/promise')
const app = express()
const port = process.env.PORT || 3000

let connection

mysql.createConnection(process.env.DATABASE_URL)
  .then(conn => {
    connection = conn
  })
  .catch(err => {
    throw new Error('Database connection failed: ' + err.message)
  })

app.post('/mysql', async (req, res) => {
  const { accessKey, sql } = req.query

  if (!accessKey) {
    return res.status(400).send('accessKey is required')
  }

  if (accessKey !== process.env.SECRET_KEY) {
    return res.status(401).send('accessKey is invalid')
  }

  if (!sql) {
    return res.status(400).send('sql is required')
  }

  try {
    const [results] = await connection.query(sql)
    res.send(results)
  } catch (err) {
    console.error(err)
    return res.status(500).send(err.message)
  }
})

app.listen(port, () => {
  console.log(`Running app on port`, port)
})

