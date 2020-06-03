import express from 'express'

import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'

// index, show, create, update, delete

const routes = express.Router()
const pointsControler = new PointsController()
const itemsControler = new ItemsController()

routes.get('/items', itemsControler.index)

routes.post('/points', pointsControler.create)
routes.get('/points', pointsControler.index)
routes.get('/points/:id', pointsControler.show)

export default routes