var express = require('express');
var router = express.Router();
var PorductoController = require('./ProductoController');


router.get('/', PorductoController.Producto_list);
router.post('/create', PorductoController.Producto_create);
router.put('/update', PorductoController.Producto_Update);
router.delete('/delete', PorductoController.Producto_Delete);
router.get('/:id/getcategoria', PorductoController.Producto_GetIdProducto);


module.exports = router;