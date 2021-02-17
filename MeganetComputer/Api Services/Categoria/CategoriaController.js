var Categoria = require('./categoria');


exports.Caterogia_list = function(req, res){
    Categoria.find({}, function(err, categorias){
        res.status(200).json({
            categorias: categorias
        });
    });

}


exports.Categoria_create = function(req, res){
    var categoria = new Categoria({nombreCategoria: req.body.nombreCategoria});
    categoria.save(function(err){
        if(err) res.status(400).json({error : err.message});
        res.status(200).json(categoria);
    });
}

exports.Categortia_update = function(req, res){
    var datos_categoria = {nombreCategoria: req.body.Categoriareq};
    Categoria.findByIdAndUpdate(req.body.id,datos_categoria, function(err){
        if(err) res.status(400).json({error: err.message });

        res.status(200).json({mensaje: "Datos actualizados correctamente"});
    } );

}

exports.Categoria_delete = function(req, res){

    Categoria.findByIdAndDelete(req.body.id, function(err){
        if (err) {
            res.status(400).json({error: err.message });
        }
        else{
          
        res.status(200).json({mensaje: "Categoria Eliminada"});
        }
    })
}

