import React, {useReducer} from 'react';

import PedidoReducer from './pedidoReducer';
import PedidoContext from './pedidoContext';

import {
  SELECCIONAR_PRODUCTOS,
  CONFIRMAR_ARTICULO,
  MOSTRAR_RESUMEN,
  ELIMINAR_PRODUCTO,
  ORDENAR_ARTICULO,
  PEDIDO_ORDENADO
} from '../../types';

const PedidoState = (props) => {
  //crear state inicial

  const initialState = {
    pedido: [],
    articulo: null,
    total: 0,
    idPedido:'',
  };

  
  //useReducer con dispatch para ejecutar fucniones

  const [state, dispatch] = useReducer(PedidoReducer, initialState);

  //Selecciona el producto para el carrito

  const seleccionarArticulo = (articulo) => {
    dispatch({
      type: SELECCIONAR_PRODUCTOS,
      payload: articulo,
    });
  };

  //Cuando el usuario confrima un platillo

  const guardarPedido = (pedido) => {
    dispatch({
      type: CONFIRMAR_ARTICULO,
      payload: pedido,
    });
  };
  //Muestra el total a pagar en resumen
  const mostrarResumen = (total) => {
    dispatch({
      type: MOSTRAR_RESUMEN,
      payload: total,
    });
  };

  //Eliminar articulo del carrito
  const eliminarProducto = (id) => {
    dispatch({
      type: ELIMINAR_PRODUCTO,
      payload: id,
    });
  };
//PEDIDO REALIZADO

const pedidoRealizado = id =>{
 dispatch({
   type: PEDIDO_ORDENADO,
   payload: id
 })   
}
  return (
    <PedidoContext.Provider
      value={{
        pedido: state.pedido,
        articulo: state.articulo,
        total: state.total,
        idPedido: state.idPedido,
        seleccionarArticulo,
        guardarPedido,
        mostrarResumen,
        eliminarProducto,
        pedidoRealizado
      }}>
      {props.children}
    </PedidoContext.Provider>
  );
};
export default PedidoState;
