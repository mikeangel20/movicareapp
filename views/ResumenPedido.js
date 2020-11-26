import React, { useContext, useEffect } from 'react';
import { Alert } from 'react-native';
//import firebase from '../firebase1';
import {
  Button,
  Text,
  Icon,
  Container,
  Content,
  List,
  ListItem,
  Thumbnail,
  Left,
  Body,
  H1,
  Footer,
  FooterTab,
} from 'native-base';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import PedidoContext from '../context/pedido/pedidoContext';
import globalStyles from '../styles/globalStyles';
import firebase from '../firebase'
import database from '../firebase1'
const ResumenPedido = () => {
  const navigation = useNavigation();

  //Context del pedido

  const { pedido, total, mostrarResumen, eliminarProducto, pedidoRealizado } = useContext(PedidoContext);

  useEffect(() => {
    calcularTotal()
  }, [pedido])

  const calcularTotal = () => {
    let nuevoTotal = 0;
    nuevoTotal = pedido.reduce((nuevoTotal, articulo) => nuevoTotal + articulo.total, 0)
    mostrarResumen(nuevoTotal)
  }

  // Redirecciona a progreso del pedido
  const progresoPedido = () => {
    Alert.alert(
      'Revisa tu pedido',
      'Una vez que realizas tu pedido, no podrás cambiarlo.',
      [
        { text: 'Revisar', style: 'cancel' },
        {
          text: 'Aceptar',
          onPress: async () => {
            const pedidoObj = {
              tiempoentrega: 0,
              completado: false,
              total: Number(total),
              orden: pedido,
              creado: Date.now()
            }
            console.log(pedidoObj)
            try {
              var usuario = database.auth().currentUser;
              if (usuario != null || usuario != undefined) {
                const pedido = await firebase.db.collection('Pedidos').add(pedidoObj);
                pedidoRealizado(pedido.id)
                //--------------------------------------------------------------------------------
                const usuariosAll = database.database().ref('usuario').orderByKey();
                usuariosAll.once("value")
                  .then(function (snapshot) {
                    var llaveU = ""; //Clave unica de usuario
                    var llaveH = ""; //Clave unica para el historial
                    var llaveL = ""; //Clave unica para el laboratorio
                    var bandH = false;
                    var bandL = false;
                    snapshot.forEach(function (childSnapshot) {
                      var childData = childSnapshot.val();
                      const c1 = childData.correo;
                      if (c1 === usuario.email) {
                        llaveU = childSnapshot.key;
                        const historial = childData.HistorialServicio;
                        if (historial === undefined) { //Significa que nunca ha comprado ningun servicio
                          bandH = false;
                        } else { //Siginifica que ya se tiene un antecedente de compra de servicio
                          for (var key in laboratorio) { //Si hay ficha medica entonces obtenemos la llave
                            llaveH = key;
                          }
                          const laboratorio = childData.HistorialServicio.Laboratorio;
                          if (laboratorio === undefined) { //Significa que nunca ha comprado un producto COVID
                            bandL = false;
                          } else { // Significa que hay registros de compra y solo debemos de agregar uno
                            for (var key in laboratorio) { //Si hay ficha medica entonces obtenemos la llave
                              llaveL = key
                            }
                          }
                        }
                      }
                    });
                    if (bandH) { // Significa que hay un historial y debemos de ver laboratorio
                      if (bandL) { // Significa que hay historial de compra para laboratorio y debemos de agregar sobre ese
                        database.database().ref("usuario/" + llaveU + "/HistorialServicio/" + llaveH + "/Laboratorio/").push().set({
                          altura: altura,
                          diabetes: checked,
                          hipertension: checked1,
                          otrasEnfermedades: checked2,
                          nigunaEnfermedad: checked3,
                          enfermedades: enfermedad,
                          alergiaSi: checked4,
                          alergiaNo: checked5,
                          alergia: alergia,
                          peso: peso
                        });
                      } else { //Significa que no hay ningun Laboratorio creado
                        var keyL = database.database().ref("usuario/" + llaveU + "/HistorialServicio/" + llaveH + "/Laboratorio/").push()
                        firebase.database().ref("usuario/" + llaveU + "/HistorialServicio/" + llaveH + "/Laboratorio/").push().set({
                          altura: altura,
                          diabetes: checked,
                          hipertension: checked1,
                          otrasEnfermedades: checked2,
                          nigunaEnfermedad: checked3,
                          enfermedades: enfermedad,
                          alergiaSi: checked4,
                          alergiaNo: checked5,
                          alergia: alergia,
                          peso: peso
                        });
                      }
                    } else {

                    }
                  });
                //--------------------------------------------------------------------------------
                //navigation.navigate('Progreso')
              } else {
                navigation.navigate('Login')
              }
              //redireccionar
              //navigation.navigate('Progreso')
            } catch (error) {
              console.log(error)
            }

          }

        }

      ]
    )
  }
  const confirmarEliminacion = id => {
    Alert.alert(
      '¿Deseas eliminar este articulo?',
      'Una vez eliminado no se puede recuperar.',
      [
        { text: 'Revisar', style: 'cancel' },
        {
          text: 'Aceptar',
          onPress: () => {
            //Eliminar del state
            eliminarProducto(id)
            //Calcular
          }
        }

      ]
    )
  }


  return (
    <>
      <Appbar.Header>
        <Button
          style={{ marginTop: 5 }}
          iconLeft
          transparent
          onPress={() => navigation.navigate('Banner')}>
          <Icon name="arrow-back" style={{ color: '#fff' }} />
        </Button>
        <Appbar.Content title="Servicios" style={{ marginLeft: 50 }} />
      </Appbar.Header>

      <Container style={globalStyles.contenedor}>
        <Content style={globalStyles.contenido}>
          <H1 style={globalStyles.titulo}>Resumen del pedido</H1>
          {pedido.map((articulo, i) => {
            const { cantidad, nombre, imagen, id, precio } = articulo;
            return (
              <List key={id + i}>
                <ListItem thumbnail>
                  <Left>
                    <Thumbnail large square source={{ uri: imagen }} />
                  </Left>
                  <Body>
                    <Text>{nombre}</Text>
                    <Text>Cantidad:{cantidad}</Text>
                    <Text>Precio: ${precio}</Text>
                    <Button
                      full
                      color='#CB3234'
                      style={{ backgroundColor: '#CB3234', marginTop: 20 }}
                      onPress={() => confirmarEliminacion(id)}
                    >
                      <Text style={{ color: '#fff' }}>Eliminar</Text>
                    </Button>
                  </Body>
                </ListItem>
              </List>
            );
          })}
          <Text style={globalStyles.cantidad}>Total a pagar: ${total}</Text>

        </Content>
        <Footer>
          <FooterTab>
            <Button
              style={globalStyles.boton}
              onPress={() => progresoPedido()}>
              <Text style={[globalStyles.botonTexto, { fontSize: 15 }]}> Confirmar Pedido</Text>
            </Button>
          </FooterTab>
          <FooterTab>
            <Button
              style={globalStyles.botonTextoAzul}
              onPress={() => navigation.navigate('Menu')}
            >
              <Text style={[globalStyles.botonTexto], { fontWeight: 'bold', color: '#fff' }}>Agregar más artículos</Text>
            </Button>
          </FooterTab>
        </Footer>

      </Container>
    </>
  );
};

export default ResumenPedido;
