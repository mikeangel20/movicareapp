import React, { useContext, useEffect, useState } from 'react'
import {Appbar} from 'react-native-paper'
import {
    Container,
    Text,
    H1,
    H3,
    Button,
    Icon
} from 'native-base'
import {useNavigation} from '@react-navigation/native'
import PedidoContext from '../context/pedido/pedidoContext'
const Progreso = () =>{
    const {idPedido} = useContext(PedidoContext)
    const navigation = useNavigation();
    return (
        <>
        <Appbar.Header>
        <Button
        style={{marginTop:5}}
          iconLeft
          transparent
          onPress={() => navigation.navigate('Banner')}>
          <Icon name="arrow-back" style={{color: '#fff'}} />
        </Button>
        <Appbar.Content title="Progreso" style={{marginLeft: 50}} />
      </Appbar.Header>
      <Text>{idPedido}</Text>
        </>
    )
}

export default Progreso;