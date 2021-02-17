var express = require('express');
var router = express.Router();
var InventarioController = require('./InventarioController');


router.get('/', InventarioController.Invetario_list);
router.post('/create', InventarioController.Inventario_create);
router.put('/update', InventarioController.Inventario_Update);
router.delete('/delete', InventarioController.Inventario_delete);
router.get('/:id/getcategoria', InventarioController.Categoria_GetCategoria);


module.exports = router;