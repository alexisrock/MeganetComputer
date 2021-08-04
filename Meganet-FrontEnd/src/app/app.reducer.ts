import { ActionReducerMap } from "@ngrx/store";
import { categortiaState, categoriaReducer } from './store/reducers/categorias.reducer';


export interface  AppState{
 categorias: categortiaState
}


export const appReducers: ActionReducerMap<AppState> = {
  categorias: categoriaReducer
}
