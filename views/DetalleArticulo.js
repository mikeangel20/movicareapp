import React, { useContext } from 'react';
import globalStyles from '../styles/globalStyles';
import { Image } from 'react-native';
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Body,
  Text,
  H1,
  Card,
  CardItem,
} from 'native-base';
import { Appbar } from 'react-native-paper';
import PedidoContext from '../context/pedido/pedidoContext';
import { useNavigation } from '@react-navigation/native';
const DetallePedido = () => {
  const { articulo } = useContext(PedidoContext);
  const { nombre, imagen, descripcion, precio, clave, requisitos } = articulo;
  //Redireccionar
  const navigation = useNavigation();
  return (
    <Container style={globalStyles.contenedor}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate('Banner')} />
        <Appbar.Content title="Servicios" style={{ marginLeft: 90 }} />
      </Appbar.Header>
      <Content style={globalStyles.contenido}>
        <H1 style={globalStyles.titulo}>{nombre}</H1>
        <Card>
          <CardItem>
            <Body>
              <Image style={globalStyles.imagen} source={{ uri: imagen }} />
              <Content style={{ marginTop: 10 }}>
                <Text style={{ color: '#00518C' }}>{clave}</Text>
                <Content
                  style={{
                    marginTop: 5,
                    borderWidth: 1,
                    borderColor: '#C0C0C0',
                    borderRadius: 10,
                  }}>
                  <Content style={{ padding: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}>Descripción:</Text>
                    <Text style={{ marginTop: 15 }}>{descripcion}</Text>
                  </Content>
                </Content>
                <Content
                  style={{
                    marginTop: 5,
                    borderWidth: 1,
                    borderColor: '#C0C0C0',
                    borderRadius: 10,
                  }}>
                  <Content style={{ padding: 5 }}>
                    <Text style={{ fontWeight: 'bold' }}>Requisitos:</Text>
                    <Text style={{ marginTop: 15 }}>{requisitos}</Text>
                  </Content>
                </Content>
                <Text style={globalStyles.cantidad}>Precio: ${precio}</Text>
              </Content>
            </Body>
          </CardItem>
        </Card>
      </Content>
      <Footer>
        <FooterTab>
          <Button
            style={globalStyles.boton}
            onPress={() => navigation.navigate('Formulario')}>
            <Text style={globalStyles.botonTexto}>Pedir</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

export default DetallePedido;
