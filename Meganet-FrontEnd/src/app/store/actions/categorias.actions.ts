import { createAction, props } from '@ngrx/store';
import { Categorias } from '../../components/Admin/models/categoria';

export const listarCategorias = createAction(
  '[Categorias] listar Categorias',
  props<{categorias: Categorias[]}>()
  );

