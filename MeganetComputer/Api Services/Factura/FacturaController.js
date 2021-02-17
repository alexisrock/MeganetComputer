var Factura = require('./Factura');


exports.Factura_list =  function(req, res){
    Factura.find({},function(factura){
        res.status(200).json({
            producto: producto
        });
    });
}


exports.Factura_create = function(req, res){
    var factura = new Factura({
        cliente : req.body.idcliente,
        total: req.body.total,
        direccion: req.body.direccion,
        telefono: req.body.Telefono,
        fechaCreacion :  Date.now

    });



}


