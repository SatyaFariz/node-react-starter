const express = require('express')
const { GraphQLSchema, execute, subscribe } = require('graphql') 
const { createServer } = require('http')
const { SubscriptionServer } = require('subscriptions-transport-ws')
const { graphqlExpress } = require('apollo-server-express')
const multer = require('multer')
const mongoose = require('mongoose')
const session = require('express-session')
const redis = require('redis')
const RedisStore = require('connect-redis')(session)
const bodyParser = require('body-parser')
const expressPlayground = require('graphql-playground-middleware-express').default

const {
  Query,
  Mutation
} = require('./schema')

mongoose.set('useCreateIndex', true)

const app = express()
const port = process.env.PORT || 4000
const graphqlEndpoint = '/graphql'
const subscriptionEndpoint = '/subscriptions'

let redisConfig = {}

// local mongoDB
mongoose.connect(
  process.env.DB_URI, 
  { useMongoClient: true }
)

redisConfig.host = 'localhost'
redisConfig.port = 6379

const redisClient = redis.createClient(redisConfig)
.on('error', (err) => console.error('ERR:REDIS:', err))

const expressSession = session({
  store: new RedisStore({ client: redisClient, disableTTL: true }),
  secret: 'keyboard cat',
  resave: false,
  cookie: { expires: false },
  saveUninitialized: true,
  rolling: true,
  name: 'connect.sess'
})

app.use(expressSession)

const upload = multer({
  dest: 'uploads/',
  limits: {
    fileSize: 1024 * 1024 * 2 // 1 MB
  }
})

const schema = new GraphQLSchema({
  query: Query, 
  mutation: Mutation
})

app.use(graphqlEndpoint, bodyParser.json(), upload.any(), graphqlExpress((req, res) => {
  const { session } = req
  return {
    schema: schema,
    context: {
      res,
      req,
      session
    }, 
  }  
}))

app.get('/playground', expressPlayground({ 
  endpoint: graphqlEndpoint, 
  subscriptionEndpoint
}))

const ws = createServer(app)

ws.listen(port, () => {
  console.log(`Running a GraphQL API server at localhost:${port}${graphqlEndpoint}`)
  new SubscriptionServer({
    execute,
    subscribe,
    schema,
    onConnect: (connectionParams, webSocket) => {

      return new Promise((resolve) => {
        expressSession(webSocket.upgradeReq, {}, () => {
          const { session } = webSocket.upgradeReq
          
          const context = {
      //      pubsub,
            session
          }

          resolve(context)
        })
      })
    }
  }, {
    server: ws,
    path: subscriptionEndpoint
  })
})
