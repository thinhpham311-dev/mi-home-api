import express from 'express'
import cors from 'cors'
import server from './config/server'
import bodyParser from 'body-parser'
import logger from 'morgan'
import validator from 'express-validator'
import versionRoutes from './modules/v1/routes'

const home = express()
home.use(express.static('public'))
home.use(logger('dev'))

const api = express()
api.use(cors({
  origin: 'https://home.victorwads.com.br'
}))
api.use(bodyParser.json())
api.use(bodyParser.urlencoded({ extended: false }))
api.use(validator())
api.use(logger('dev'))
api.use('/api/v1', versionRoutes)

server.start(api, home)
export default server
