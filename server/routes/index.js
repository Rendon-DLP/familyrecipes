const express = require("express")
const router = express.Router()
const config = require("config")
const jwt = require("jsonwebtoken")
const sha512 = require("js-sha512")
const conn = require("../db")


// RECIPE POST

router.post('/recipes', (req, res, next) => {
  const name = req.body.name
  const prep = req.body.prep
  const directions = req.body.directions

  const sql =
  ` INSERT INTO recipes (name, prep, directions) VALUES (?, ?, ?)`

  conn.query(sql, [name, prep, directions], (err, results, fields) => {
    const count = results.count
  })
})

// a router that recieves calls to all recipes in the database
router.get('/recipe', (req, res, next) => {
  res.json({
    message: 'listening for a call to the database recipe list'
  })


})

// INGREDIENT POST

router.post('/ingredients', (req, res, next) => {
  const ingredients = req.body.ingredients

  const sql =
  ` INSERT INTO ingredients (ingredients) VALUES (?)`

  conn.query(sql, [ingredients], (err, results, fields) => {
    const count = results.count
  })
})

// LOGIN POST

router.post("/login", (req, res, next) => {
  const username = req.body.username
  const password = sha512(req.body.password + config.get("salt"))

  const sql =
    "SELECT count(1) as count FROM users WHERE username = ? AND password = ?"

  conn.query(sql, [username, password], (err, results, fields) => {

    const count = results[0].count

    if (count >= 1) {
      const token = jwt.sign({ username }, config.get("secret"))

      res.json({
        token
      })
    } else {
      res.status(401).json({
        error: "Invalid username or password"
      })
    }
  })

})


// REGISTER POST

router.post("/register", (req, res, next) => {
  const username = req.body.username
  const password = sha512(req.body.password + config.get("salt"))

  const checksql = "SELECT count(1) as count from users WHERE username = ?"

  conn.query(checksql, [username], (err, results, fields) => {
    console.log(err)
    const count = results[0].count

    if (count > 0) {
      res.status(409).json({
        error: "Username already taken"
      })
    } else {
      const sql = "INSERT INTO users (username, password) VALUES (?, ?)"

      conn.query(sql, [username, password], (err, results, fields) => {
        if (err) {
          throw new Error("register failed")
        } else {
          const token = jwt.sign({ username }, config.get("secret"))
          res.json({
            token: token
          })
        }
      })
    }
  })
 })

module.exports = router
