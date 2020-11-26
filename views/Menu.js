import React, { useContext, useEffect, Fragment } from 'react'
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import FirebaseContext from '../context/firebase/firebaseContext'
import PedidoContext from '../context/pedido/pedidoContext'
import { Appbar } from 'react-native-paper';
import {
    Container,
    Separator,
    Content,
    List,
    ListItem,
    Thumbnail,
    Text,
    Body
} from 'native-base'

const Menu = () => {
    const navigation = useNavigation()
    const { menu, obtenerProductos } = useContext(FirebaseContext)
    //NAVBAR CONTROLS
    const regresar = () => { navigation.navigate('Banner') };
    const _handleSearch = () => console.log('Searching');
    const _handleMore = () => console.log('Shown more');
    const { seleccionarArticulo } = useContext(PedidoContext)
    useEffect(() => {
        obtenerProductos();

    }, [])
    const mostrarHeading = (subcategoria, i) => {
        if (i > 0) {
            const categoriaAnterior = menu[i - 1].subcategoria;
            if (categoriaAnterior != subcategoria) {
                return (
                    <Separator style={styles.separador}>
                        <Text style={styles.separadorTexto}>
                            {subcategoria}
                        </Text>
                    </Separator>
                )
            }
        } else {
            return (
                <Separator style={styles.separador}>
                    <Text style={styles.separadorTexto}>
                        {subcategoria}
                    </Text>
                </Separator>
            )
        }
    }
    return (
        <Container>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.navigate('Banner')} />
                <Appbar.Content title="Servicios" style={{ marginLeft: 90 }} />
            </Appbar.Header>
            <Content>
                <List>
                    {menu.map((articulo, i) => {
                        const { imagen, subcategoria, nombre, descripcion, categoria, precio, id } = articulo;
                        return (
                            <Fragment
                                key={id}
                            >
                                {mostrarHeading(subcategoria, i)}
                                <ListItem
                                    onPress={() => {
                                        const { existencia, ...articulo2 } = articulo
                                        seleccionarArticulo(articulo2)
                                        navigation.navigate('DetallePedido')
                                    }}
                                >
                                    <Thumbnail
                                        square
                                        source={{ uri: 'https://movicaremx.com/img_app/Cliente.png' }}
                                    />
                                    <Body>
                                        <Text>{nombre}</Text>
                                        <Text
                                            note
                                            numberOfLines={2}
                                        >
                                            {descripcion}
                                        </Text>

                                        <Text>Precio: $ {precio}</Text>
                                    </Body>
                                </ListItem>

                            </Fragment>
                        )
                    })}
                </List>
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    separador: {
        borderBottomWidth: 1,
        backgroundColor: '#fff'
    },
    separadorTexto: {
        color: '#000000',
        fontSize: 15,
        textTransform: 'uppercase'
    }
})
export default Menu;