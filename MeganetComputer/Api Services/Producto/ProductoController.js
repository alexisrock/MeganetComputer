var Producto = require('./Producto');


exports.Producto_list = function(req, res){
    Producto.find({}, function(factura){
        res.status(200).json({
            factura: factura
        });
    });

}


exports.Producto_create = function(req, res){
    var nuevoProducto = new Producto({
        codigo : req.body.codproducto,
        Nombre : req.body.nombreproducto,
        Precio : req.body.precioproducto,
        Marca : req.body.idmarca,
        Descripcion : req.body.descriproducto,
        FechaCreacion : Date.now,
        PrecioVenta : req.body.preciovenproducto,
        EsPaginaInicial: req.body.paginainiproducto,
        Categoria: req.body.idCategoria
    });

   const  result =  Producto.where({'EsPaginaInicial': true}).count();

   if(result>10){
    nuevoProducto.save(function(err){
        if(err) res.status(400).json({error: err.message });    
        res.status(200).json(nuevoProducto);
    });
   }else{
    res.status(400).json({
        error: "Ya a ingresado el numero maximo de productos para ver en la pagina principal"
    });
   }

}

exports.Producto_GetIdProducto = function(req, res){
    var product = Producto.findById(req.params.id);
    res.status(200).json({
        producto: product
    });
}

exports.Producto_Update = function(req, res){
    var datosproducto = {
        codigo : req.body.codproducto,
        Nombre : req.body.nombreproducto,
        Precio : req.body.precioproducto,
        Marca : req.body.idmarca,
        Descripcion : req.body.descriproducto,     
        PrecioVenta : req.body.preciovenproducto,
        EsPaginaInicial: req.body.paginainiproducto,
        Categoria: req.body.idCategoria
    };

    Producto.findByIdAndUpdate(req.body.id,datosproducto, function(err){
        if(err) res.status(400).json({error: err.message });

        res.status(200).json({mensaje: "Datos actualizados correctamente"});
    } );
}

exports.Producto_Delete = function(req, res){
    Producto.findByIdAndDelete(req.body.id, function(err){
        if (err) {
            res.status(400).json({error: err.message });
        }
        else{
          
        res.status(200).json({mensaje: "Inventario Eliminado"});
        }
    })



}
