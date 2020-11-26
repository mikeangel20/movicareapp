import React, { useReducer} from 'react'
import FirebaseReducer from './firebaseReducer'

import FirebaseContext from './firebaseContext'

import firebase from '../../firebase'

import { OBTENER_PRODUCTOS_EXITO } from '../../types'

import _ from 'lodash'

const FirebaseState = props =>{

    

    //Crear state inicial

    const initialState = {
        menu:[]
    }
    //useReducer con dispatch

    const [state, dispatch] = useReducer(FirebaseReducer,initialState);

    //funcion para traer los productos
    const obtenerProductos = () =>{
        
        firebase.db.settings({ experimentalForceLongPolling: true });
        firebase.db
                .collection('productos')
                .where('existencia', '==', true)
                .onSnapshot(manejarSnapshot)
        function manejarSnapshot(snapshot){
            let articulo = snapshot.docs.map(doc=>{
                return{
                    id:doc.id,
                    ...doc.data()
                }
            });
// ordenar por categoria con lodash
articulo = _.sortBy(articulo, 'categoria')

            //en este punto ya se recuperan los datos
            dispatch({
                type: OBTENER_PRODUCTOS_EXITO,
                payload:articulo
            });
        }
    }


    return(
        <FirebaseContext.Provider
            value={{
                menu: state.menu,
                firebase,
                obtenerProductos
            }}
        >
            {props.children}
        </FirebaseContext.Provider>
    )
}
export default FirebaseState