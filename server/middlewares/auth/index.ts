import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import express from "express"
const JWT_SECRET_KEY = "abd3-h3dl7k-45gh-d45fg7"
const JWT_EXPIRES_IN = "1h"
const SALT_LENGTH = 10
const EMAIL_REGEX = new RegExp(
  "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
)
const MIN_PASSWORD_LENGTH = 4

const validate =
  ({ required }) =>
  (req, res, next) => {
    const { email, password } = req.body
    if (
      required &&
      (!email || !email.trim() || !password || !password.trim())
    ) {
      res.status(400).jsonp("Email and password are required")
      return
    }
    if (email && !email.match(EMAIL_REGEX)) {
      res.status(400).jsonp("Email format is invalid")
      return
    }
    if (password && password.length < MIN_PASSWORD_LENGTH) {
      res.status(400).jsonp("Password is too short")
      return
    }
    next()
  }

const create = (req, res, next) => {
  const body = req.body,
    { email, password } = body
  const { db } = req.app
  const existingUser = db.get("users").find({ email }).value()
  if (existingUser) {
    res.status(400).jsonp("Email already exists")
    return
  }
  bcrypt
    .hash(password, SALT_LENGTH)
    .then(hash => {
      try {
        return db
          .get("users")
          .insert({ ...body, password: hash })
          .write()
      } catch (error) {
        throw Error('You must add a "users" collection to your db')
      }
    })
    .then(user => {
      return new Promise((resolve, reject) => {
        jwt.sign(
          { email },
          JWT_SECRET_KEY,
          { expiresIn: JWT_EXPIRES_IN, subject: String(user.id) },
          (error, accessToken) => {
            if (error) reject(error)
            else resolve({ accessToken: accessToken, user })
          },
        )
      })
    })
    .then(value => {
      const { accessToken, user } = value as any
      const userWithoutPassword = { ...user }
      delete userWithoutPassword.password
      res.status(201).jsonp({ accessToken, user: userWithoutPassword })
    })
    .catch(next)
}

const login = (req, res, next) => {
  const { email, password } = req.body
  const { db } = req.app
  const user = db.get("users").find({ email }).value()
  if (!user) {
    res.status(400).jsonp("Cannot find user")
    return
  }
  bcrypt
    .compare(password, user.password)
    .then(same => {
      if (!same) res.status(400).jsonp("Cannot find user")
      return new Promise((resolve, reject) => {
        jwt.sign(
          { email },
          JWT_SECRET_KEY,
          { expiresIn: JWT_EXPIRES_IN, subject: String(user.id) },
          (error, accessToken) => {
            if (error) reject(error)
            else resolve(accessToken)
          },
        )
      })
    })
    .then(accessToken => {
      const userWithoutPassword = { ...user }
      delete userWithoutPassword.password
      res.status(200).jsonp({ accessToken, user: userWithoutPassword })
    })
    .catch(err => {
      if (err === 400) res.status(400).jsonp("Incorrect password")
      else next(err)
    })
}

const update = (req, res, next) => {
  const { password } = req.body
  if (!password) {
    next()
    return
  }
  bcrypt
    .hash(password, SALT_LENGTH)
    .then(hash => {
      req.body.password = hash
      next()
    })
    .catch(next)
}

const loggedOnly = (req, res, next) => {
  const { authorization } = req.headers
  if (!authorization) {
    res.status(401).jsonp("Missing authorization header")
    return
  }
  const [scheme, token] = authorization.split(" ")
  if (scheme !== "Bearer") {
    res.status(401).jsonp("Incorrect authorization scheme")
    return
  }
  if (!token) {
    res.status(401).jsonp("Missing token")
    return
  }
  try {
    jwt.verify(token, JWT_SECRET_KEY)
    req.claims = jwt.decode(token)
    next()
  } catch (err) {
    res.status(401).jsonp((err as any).message)
  }
}

export default express
  .Router()
  .post("/register", validate({ required: true }), create)
  .post("/login", validate({ required: true }), login)
  .put("/users/:id", validate({ required: true }), update)
  .patch("/users/:id", validate({ required: false }), update)
  .use(loggedOnly)
