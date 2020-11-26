import React, { useState, useContext, useEffect } from 'react'
import { Alert } from 'react-native'
import globalStyles from '../styles/globalStyles'
import {
    Container,
    Content,
    Button,
    Grid,
    Col,
    Text,
    Form,
    Icon,
    Input,
    Footer,
    FooterTab
} from 'native-base';
import PedidoContext from '../context/pedido/pedidoContext';
import { useNavigation } from '@react-navigation/native';
import { Appbar } from 'react-native-paper'
const Formulario = () => {
    const navigation = useNavigation()
    //state para cantidades
    const [cantidad, guardarCantidad] = useState(1);
    const [total, guardarTotal] = useState(0)
    const { articulo, guardarPedido } = useContext(PedidoContext)
    const { precio } = articulo
    //decerementar
    const decremetnarUno = () => {
        if (cantidad > 1) {
            const nuevaCantidad = parseInt(cantidad) - 1;
            guardarCantidad(nuevaCantidad)
        }
    }
    //Incrementar en uno
    const incrementarUno = () => {
        const nuevaCantidad = parseInt(cantidad) + 1;
        guardarCantidad(nuevaCantidad)
    }
    const calcularTotal = () => {
        const totalPagar = precio * cantidad
        guardarTotal(totalPagar)
    }
    //Confirma si la orden es correcta
    const confirmarOrden = () => {
        Alert.alert(
            '¿Deseas agregar dicha cantidad al carrito?',
            'Un pedido confirmado ya no se podra modificar',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Aceptar',
                    onPress: () => {
                        //Almacenar en pedido array del context
                        const pedido = {
                            ...articulo,
                            cantidad,
                            total
                        }
                        guardarPedido(pedido)
                        navigation.navigate('Resumen')
                    },

                }

            ]
        )
    }
    useEffect(() => {
        calcularTotal()
    }, [cantidad])
    return (
        <Container>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.navigate('Banner')} />
                <Appbar.Content title="Servicios" style={{ marginLeft: 90 }} />
            </Appbar.Header>
            <Content>
                <Form>
                    <Text style={globalStyles.titulo}>Cantidad</Text>
                    <Grid>
                        <Col>
                            <Button
                                block
                                props
                                style={{ backgroundColor: '#00518C', justifyContent: 'center' }}
                                onPress={() => decremetnarUno()}
                            >
                                <Icon style={{ fontSize: 30 }} name="remove" />
                            </Button>
                        </Col>
                        <Col>
                            <Input
                                style={{ textAlign: 'center' }}
                                value={cantidad.toString()}
                                keyboardType='numeric'
                                onChangeText={cantidad => guardarCantidad(cantidad)}

                            />
                        </Col>
                        <Col>
                            <Button
                                block
                                props
                                style={{ backgroundColor: '#65b32e' }}
                                onPress={() => incrementarUno()}
                            >
                                <Icon style={{ fontSize: 30 }} name="add" />
                            </Button>
                        </Col>

                    </Grid>
                </Form>
                <Text
                    style={globalStyles.cantidad}
                >Total: $ {total}</Text>
            </Content>
            <Footer>
                <FooterTab>
                    <Button
                        style={globalStyles.boton}
                        onPress={() => confirmarOrden()}
                    >
                        <Text style={globalStyles.botonTexto}>Agregar al carrito</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    )
}

export default Formulario;