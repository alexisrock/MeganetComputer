var mongoose = require('mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;

let ProductoSchema = new Schema({
    codigo:{
        type: String,
        required: true,
        trim: true
    },
    Nombre: {
        type: String,
        required: true,
        trim: true
    },
    Precio : {
        type: Decimal128,
        required: true
    },
    Marca: {type: mongoose.Schema.Types.ObjectId, ref: 'Marca'},
    Descripcion: {
        type: String,
        required: true,
        trim: true
    },
    FechaCreacion: {
        type: Date,
        default: Date.now 
    },
    PrecioVenta:  Decimal128,
    Estado: {
        type: Boolean,
        default: true
    },
    EsPaginaInicial : {
        type: Boolean,
        default: false
    },
    Categoria:{type: mongoose.Schema.Types.ObjectId, ref: 'Categoria' }

});


module.exports = mongoose.model('Producto', ProductoSchema);