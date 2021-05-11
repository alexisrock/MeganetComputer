import { Categorias } from "./categoria";
import { Marca } from "./marca";

export interface Productos {
  Estado: boolean;
  EsPaginaInicial: boolean;
  _id: string;
  codigo: string;
  Nombre: string;
  Precio: number;
  Marca?: Marca;
  Descripcion: string;
  PrecioVenta: number;
  Categoria?: Categorias;
  FechaCreacion: Date;
}
