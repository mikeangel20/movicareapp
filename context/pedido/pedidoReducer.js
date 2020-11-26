import {
  SELECCIONAR_PRODUCTOS,
  CONFIRMAR_ARTICULO,
  MOSTRAR_RESUMEN,
  ELIMINAR_PRODUCTO,
  PEDIDO_ORDENADO
} from '../../types';

export default (state, action) => {
  switch (action.type) {
    case SELECCIONAR_PRODUCTOS:
      return {
        ...state,
        articulo: action.payload,
      };

    case CONFIRMAR_ARTICULO:
      return {
        ...state,
        pedido: [...state.pedido, action.payload],
      };
    case MOSTRAR_RESUMEN:
      return {
        ...state,
        total: action.payload,
      };
    case ELIMINAR_PRODUCTO:
      return {
        ...state,
        pedido: state.pedido.filter(
          (articulo) => articulo.id !== action.payload,
        ),
      };
      case PEDIDO_ORDENADO:
        return{
          ...state,
          idPedido: action.payload
        }
    default:
      return state;
  }
};
