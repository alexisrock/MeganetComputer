import { createReducer, on, Action } from '@ngrx/store';
import { listarCategorias } from '../actions/categorias.actions';
import { Categorias } from '../../components/Admin/models/categoria';


export interface categortiaState {
    categorias: Categorias[]
}

export const initialState: categortiaState = {
  categorias: [],
}

const _categoriasReducer = createReducer(initialState,

    on(listarCategorias, (state, {categorias}) => ({ ...state, categorias: [...categorias]})),

);

export function categoriaReducer(state=initialState, action: Action) {
    return _categoriasReducer(state, action);
}
