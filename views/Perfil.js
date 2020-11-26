import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'native-base';
import { Avatar, Accessory } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native'


const Perfil = () => {
    const navigation = useNavigation();
    return (

        <>
            <ScrollView style={styles.contenedor}>

                <View>
                    <Image
                        source={{ uri: 'https://movicaremx.com/img_app/header-Form.png', width: '100%', height: 170, marginTop: 10 }}
                    />

                    <Avatar 
                        rounded
                        size="xlarge"
                        source={{
                            uri: 
                                'https://movicaremx.com/img_app/ICONOS%20USARIO_Mesa%20de%20trabajo%201.png',
                        }}
                        containerStyle={{flex: 1, marginLeft: 140, marginTop:5 }}
                    >
                    </Avatar>

                    <Text style={styles.titulo}>¡Bienvenido!</Text>

                    <Button block style={styles.eBoton}>
                    <View style={styles.iconos}>
                        <Icon style={styles.eIconos} name='notes-medical' />
                        <Text style={{color: '#FFFF',
        textAlign:'center',
        marginRight:10,
        marginLeft:70,
        fontWeight: 'bold',
        fontSize: 15, }}> FICHA MÉDICA</Text>
                    </View>
                </Button>

                <Button block style={styles.eBoton}>
                    <View style={styles.iconos}>
                        <Icon style={styles.eIconos} name='book-medical' />
                        <Text style={styles.contenido}>HISTORIAL CLÍNICO</Text>
                    </View>
                </Button>

                <Button block style={styles.eBoton}>
                    <View style={styles.iconos}>
                        <Icon style={styles.eIconos} name='microscope' />
                        <Text style={{color: '#FFFF',
        textAlign:'center',
        marginRight:10,
        marginLeft:60,
        fontWeight: 'bold',
        fontSize: 15, }}>TUS RESULTADOS</Text>
                    </View>
                </Button>

                <Button block style={styles.eBoton}>
                    <View style={styles.iconos}>
                        <Icon style={styles.eIconos} name='cart-plus' />
                        <Text style={styles.contenido}>HISTORIAL DE PEDIDOS</Text>
                    </View>
                </Button>

                <Button block style={styles.eBoton}>
                    <View style={styles.iconos}>
                        <Icon style={styles.eIconos}  name='money-check-alt' />
                        <Text style={{color: '#FFFF',
        textAlign:'center',
        marginRight:10,
        marginLeft:70,
        fontWeight: 'bold',
        fontSize: 15, }}>MÉTODO DE PAGO</Text>
                    </View>
                </Button>

                <Button block style={styles.eBoton} onPress={() => navigation.navigate("Domicilio")}>
                    <View style={styles.iconos}>
                        <Icon style={styles.eIconos} name='home' />
                        <Text style={{color: '#FFFF',
        textAlign:'center',
        marginRight:10,
        marginLeft:40,
        fontWeight: 'bold',
        fontSize: 15, }}>DATOS DE DOMILICIO</Text>
                    </View>
                </Button>

                <Button block style={styles.eBoton} onPress={() => navigation.navigate("Atencion")}>
                    <View style={styles.iconos}>
                        <Icon style={styles.eIconos} name='address-card' />
                        <Text style={styles.contenido}>ATENCIÓN A CLIENTES</Text>
                    </View>
                </Button>

                <Button block style={styles.eBotonC}>
                    <View style={styles.iconos}>
                        <Icon style={styles.eIconosC}  name='sign-out-alt' />
                        <Text style={{color: '#FFFF',
        textAlign:'center',
        marginRight:10,
        marginLeft:70,
        fontWeight: 'bold',
        fontSize: 15, }}>CERRAR SESIÓN</Text>
                    </View>
                </Button>

                </View>
            </ScrollView>
        </>
    );
};

export default Perfil;

const styles = StyleSheet.create({
    contenedor:{
        backgroundColor:'#FFFF'
    },
    iconos:{
        marginLeft:10,
        position:'absolute',
        textAlign: 'left'
    },
    titulo: {
        color: '#00518c',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 10,
        marginBottom: 10,
    },
    contenido: {
        color: '#FFFF',
        textAlign:'center',
        marginRight:10,
        marginLeft:40,
        fontWeight: 'bold',
        fontSize: 15
    },
    eBoton: {
        marginBottom: 20,
        marginHorizontal: 15,
        borderRadius: 40,
        backgroundColor: "#00518c",
    },
    eBotonC: {
        marginBottom: 30,
        marginHorizontal: 15,
        borderRadius: 40,
        backgroundColor:"#9e0f02",
    },
    eIconos:{
        color: '#FFFF',
        position:'absolute',
        marginRight: 10,
        marginLeft: 10,
        fontSize: 20
    },
    eIconosC:{
        color: '#FFFF',
        position:'absolute',
        marginRight: 10,
        marginLeft: 10,
        fontSize: 20
    }
});