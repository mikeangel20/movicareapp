import React from 'react';
import FirebaseState from './context/firebase/firebaseState';
import PedidoState from './context/pedido/pedidoState';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler'
//-------------------------------------------------------------------------
import Atencion from './views/Atencion'
import Aviso from './views/Aviso' //No incluido en views, Componenets
import Banner from './views/Banner'
import DetallePedido from './views/DetalleArticulo'
import Direccion from './views/Direccion'
import Domicilio from './views/Domicilio'
import Ficha2 from './views/Ficha2' //No incluido en views, Componenets
import Formulario from './views/FormularioArticulo'
import Inicio from './views/Inicio'
import Login from './views/Login'
import Menu from './views/Menu'
import OpcionesUsuario from './views/OpcionesUsuario'
import Perfil from './views/Perfil'
import Progreso from './views/ProgresoPedido'
import Registrate from './views/Registrate'
import ResumenPedido from './views/ResumenPedido'

const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#00518c',
    accent: '#65B32E',
  },
};
const App = () => {
  return (
    <>
      <PaperProvider theme={theme}>
        <FirebaseState>
          <PedidoState>
            <NavigationContainer>
              <Stack.Navigator
                initialRouteName="Banner"
                screenOptions={{
                  headerShown: false
                }}
              >
                <Stack.Screen
                  name="Login"
                  component={Login}

                />
                <Stack.Screen
                  name="Banner"
                  component={Banner}

                />
                <Stack.Screen
                  name="Registrate"
                  component={Registrate}
                />
                <Stack.Screen
                  name="Atencion"
                  component={Atencion}
                />
                <Stack.Screen
                  name="Direccion"
                  component={Direccion}
                />
                <Stack.Screen
                  name="Domicilio"
                  component={Domicilio}
                />
                <Stack.Screen
                  name="OpcionesUsuario"
                  component={OpcionesUsuario}
                />
                <Stack.Screen
                  name="Perfil"
                  component={Perfil}
                />
                <Stack.Screen
                  name="Inicio"
                  component={Inicio}
                />
                <Stack.Screen
                  name='Ficha2'
                  component={Ficha2}
                />
                <Stack.Screen
                  name='Aviso'
                  component={Aviso}
                />
                <Stack.Screen
                  name="Menu"
                  component={Menu}
                  options={{
                    title: 'Laboratorio',
                  }}
                />
                <Stack.Screen
                  name="DetallePedido"
                  component={DetallePedido}
                  options={{
                    title: 'Detalles',
                  }}
                />
                <Stack.Screen
                  name="Formulario"
                  component={Formulario}
                  options={{
                    title: 'Formulario',
                  }}
                />
                <Stack.Screen
                  name="Progreso"
                  component={Progreso}
                  options={{
                    title: 'Progreso',
                  }}
                />
                <Stack.Screen
                  name="Resumen"
                  component={ResumenPedido}
                  options={{
                    title: 'Resumen Pedidoe',
                  }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </PedidoState>
        </FirebaseState>
      </PaperProvider>
    </>
  );
}

export default App;