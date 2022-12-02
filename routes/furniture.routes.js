const Router = require('express')
const router  = new Router()
const FurnitureController = require('../controller/furniture.controller')

router.post('/furniture', FurnitureController.createFurniture)
router.get('/furniture', FurnitureController.getFurniture)
router.get('/furniture/:id', FurnitureController.getOneFurniture)
router.put('/furniture/', FurnitureController.updateFurniture)
router.delete('/furniture/:id', FurnitureController.deleteFurniture)


module.exports = router