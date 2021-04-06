
export class Producto {
    _id? :  Number;
    codigo: String;
    nombre: String;
    precio: Number;
    marca: String;
    descripcion: String;
    precioventa: Number;
    espaginainicial: Boolean;
    categotia: String;
    urlImagen: String;

    constructor(codigo:String, nombre : String, precio: Number,  marca: String, descripcion: String,precioventa: Number,
        espaginainicial: Boolean, categotia: String, urlImagen: String){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
        this.descripcion = descripcion;
        this.precioventa = precioventa;
        this.espaginainicial = espaginainicial;
        this.categotia = categotia;
        this.urlImagen = urlImagen;
    }

}