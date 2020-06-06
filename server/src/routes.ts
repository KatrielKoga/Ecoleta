import express from 'express'
import multer from 'multer'
import multerConfig from './configurations/multer'
import { celebrate, Joi } from 'celebrate' 

import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'

// index, show, create, update, delete

const routes = express.Router()
const upload = multer(multerConfig)


const pointsControler = new PointsController()
const itemsControler = new ItemsController()

routes.get('/items', itemsControler.index)

routes.get('/points', pointsControler.index)
routes.get('/points/:id', pointsControler.show)


routes.post(
    '/points',
    upload.single('image'),
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.number().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            items: Joi.string().required(),
        })
    }, {
        abortEarly: false
    }),
    pointsControler.create
)


export default routes