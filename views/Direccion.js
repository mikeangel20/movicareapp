import React, {useState}from 'react';
import { Image, View, StyleSheet, Text, Alert } from 'react-native';
import { ScrollView, TextInput} from 'react-native-gesture-handler';
import { Button } from 'native-base';
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome5';


const Direccion = () => {
    const navigation = useNavigation();

    //Datos de la direccion
    const [calle, guardarCalle] = useState(''); //Calle
    const [dele, guardarDele] = useState(''); //Delegación
    const [estado, guardarEstado] = React.useState(); //Estado
    const [noE, guardarNoE] = React.useState(); //No. Exterior
    const [noI, guardarNoI] = React.useState(); //No. Interior
    const [ciudad, guardarCiudad] = useState(''); //Ciudad
    const [codP, guardarCodP] = useState(''); //Código Postal
    
    const datos = () => {
        if (calle === '' || dele === '' || estado === '' || noE === '' || noI === '' || ciudad === ''|| codP === '') {
            Alert.alert(

                'Campos vacios, verifica',
                'Debes llenar todos los campos que se muestran en pantalla.',
                [{ text: 'Aceptar', style: 'cancel' }]
            )
        } else {
            console.log(calle, dele, estado, noE, noI, ciudad, codP)
        }
        //redireccionar
        navigation.navigate('Domicilio');
    }
    return (

        <>
            <ScrollView>

                <View style={styles.contenedor}>
                    <Image
                        source={{ uri: 'https://movicaremx.com/img_app/header-Form.png', width: '100%', height: 170, marginTop: 10 }}
                    />

                    <Text style={styles.titulo}>AÑADIR UNA NUEVA UBICACIÓN</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Calle"
                        onChangeText={(texto) => guardarCalle(texto)}
                        value={calle}
                        />

                        <TextInput
                        style={styles.input}
                        placeholder="Delegación/Municipio"
                        onChangeText={(texto) => guardarDele(texto)}
                        value={dele}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Estado"
                        onChangeText={(texto) => guardarEstado(texto)}
                        value={estado}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="No. Ext."
                        onChangeText={(texto) => guardarNoE(texto)}
                        value={noE}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="No. Int."
                        onChangeText={(texto) => guardarNoI(texto)}
                        value={noI}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Ciudad"
                        onChangeText={(texto) => guardarCiudad(texto)}
                        value={ciudad}
                    />

                    <TextInput
                        textContentType="postalCode"
                        keyboardType="numeric"
                        style={styles.input}
                        placeholder="Código Postal"
                        onChangeText={(texto) => guardarCodP(texto)}
                        value={codP}
                    />

                    <Button style={styles.eBoton} onPress={() => datos()}>
                        <View style={styles.contenido}>
                            <Icon style={styles.eIconos}  name="plus"></Icon>
                            <Text style={styles.contenido}>
                                Agregar
                            </Text>
                        </View>
                    </Button>

                </View>
            </ScrollView>
        </>
    );
};

export default Direccion;

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#FFFF',
        alignItems: 'center'
    },
    input: {
        backgroundColor: '#fff',
        width: '60%',
        height: 40,
        borderColor: '#00518C',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 20
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
        marginLeft: 55,
        fontWeight: 'bold',
        fontSize: 15
    },
    eBoton: {
        marginBottom: 20,
        marginHorizontal: 15,
        borderRadius: 40,
        width: '60%',
        backgroundColor: "#65B32E",
        alignSelf: 'center'
    },
    eIconos: {
        color: '#FFFF',
        position: 'absolute',
        marginRight: 10,
        marginLeft: 10,
        fontSize: 20
    },
});