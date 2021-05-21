import { Categorias } from "./categoria";
import { Marca } from "./marca";

export interface Productos {
  Estado?: boolean;
  paginainiproducto: boolean;
  _id?: string;
  codproducto: string;
  nombreproducto: string;
  precioproducto: number;
  idmarca?: Marca;
  descriproducto: string;
  preciovenproducto: number;
  urldeimagen: string;
  idCategoria?: Categorias;
  FechaCreacion?: Date;
  archivo?: File;
}
