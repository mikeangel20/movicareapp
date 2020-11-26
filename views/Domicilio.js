import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native'


const Domicilio = () => {
    const navigation = useNavigation();
    return (

        <>
            <ScrollView style={styles.contenedor}>

                <View>
                    <Image
                        source={{ uri: 'https://movicaremx.com/img_app/header-Form.png', width: '100%', height: 170, marginTop: 10 }}
                    />

                    <Text style={styles.titulo}>UBICACIONES</Text>

                    <Button block style={styles.eBoton}>
                        <View style={styles.iconos}>
                            <Icon style={styles.eIconos} name='home' />
                            <Text style={{
                                color: '#FFFF',
                                textAlign: 'center',
                                marginLeft: 40,
                                fontWeight: 'bold',
                                fontSize: 15,
                            }}>HOGAR</Text>
                        </View>
                    </Button>

                    <Button block style={styles.eBoton} onPress={() => navigation.navigate("Direccion")}>
                        <View style={styles.iconos}>
                            <Icon style={styles.eIconos} name='building' />
                            <Text style={styles.contenido}>TRABAJO</Text>
                        </View>
                    </Button>

                    <Button block style={styles.eBoton} onPress={() => navigation.navigate("Direccion")}>
                        <View style={styles.iconos}>
                            <Icon style={styles.eIconos} name='plus' />
                            <Text style={{
                                color: '#FFFF',
                                textAlign: 'center',
                                marginLeft: 40,
                                fontWeight: 'bold',
                                fontSize: 15,
                            }}>AÑADIR</Text>
                        </View>
                    </Button>

                    <Button block style={styles.eBoton}>
                        <View style={styles.iconos}>
                            <Icon style={styles.eIconosC} name='arrow-left' />
                            <Text style={{
                                color: '#FFFF',
                                textAlign: 'center',
                                marginLeft: 40,
                                fontWeight: 'bold',
                                fontSize: 15,
                            }}>REGRESAR</Text>
                        </View>
                    </Button>

                </View>
            </ScrollView>
        </>
    );
};

export default Domicilio;

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#FFFF'
    },
    iconos: {
        marginLeft: 10,
        position: 'absolute',
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
        textAlign: 'center',
        marginRight: 10,
        marginLeft: 40,
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
        backgroundColor: "#9e0f02",
    },
    eIconos: {
        color: '#FFFF',
        position: 'absolute',
        marginRight: 10,
        marginLeft: 10,
        fontSize: 20
    },
    eIconosC: {
        color: '#FFFF',
        position: 'absolute',
        marginRight: 10,
        marginLeft: 10,
        fontSize: 20
    }
});