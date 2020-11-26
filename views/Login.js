import { Alert } from 'react-native'
import firebase from '../firebase1'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Text, StyleSheet, View, ImageBackground } from 'react-native'
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler'
import CryptoJS from 'react-native-crypto-js'

const Login = () => {
    const navigation = useNavigation();
    const [correo, guardarCorreo] = useState('');
    const [password, guardarPassword] = useState('');
    const usuariosAll = firebase.database().ref('usuario').orderByKey();

    const desencriptar = (password) => {
        let bytes = CryptoJS.AES.decrypt(password, 'movicaremxSGNddmm');
        let passwordn = bytes.toString(CryptoJS.enc.Utf8);
        return passwordn;
    }

    const Sesion = () => {
        if (correo === '' || password === '') {
            Alert.alert(
                'Oops...',
                'Favor de colocar correo y contraseña.',
                [{ text: 'OK', style: 'cancel' }])
        } else {
            try {
                usuariosAll.once("value")
                    .then(function (snapshot) {
                        var band = false;
                        var band1 = false;
                        snapshot.forEach(function (childSnapshot) {
                            var childData = childSnapshot.val();
                            const c1 = childData.correo;
                            const p = childData.password;
                            const p1 = desencriptar(p);
                            const fichaMedica = childData.fichaMedica;
                            if (c1 === correo && p1 === password) {
                                band = true;
                                if (fichaMedica === undefined) {
                                    band1 = true // No existe ficha Medica
                                }
                            }
                        });
                        if (band) {
                            firebase
                                .auth()
                                .signInWithEmailAndPassword(correo, password).catch(function (error) {
                                    Alert.alert(
                                        'Oops ...',
                                        'Ha ocurrido un error.\n' + error.message,
                                        [{ text: 'OK', style: 'cancel' }]
                                    )
                                });
                            if (band1) { // Si no existe ficha Medica, mandamos al usuario a llenar una
                                navigation.navigate("Ficha2")
                            } else { //En caso de existir ficha, mandamos a banner
                                navigation.navigate("Banner")
                            }
                        } else {
                            Alert.alert(
                                'Oops ...',
                                'Usuario no encontrado.\nFavor de revisar correo y contraseña.',
                                [{ text: 'OK', style: 'cancel' }]
                            )
                        }
                    });
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <>
            <ImageBackground source={source = { uri: 'https://www.movicaremx.com/img_app/Login-fondo.png', width: 350, height: 150, }} style={styles.fondo}>
                <View style={styles.container}>
                    <View>
                        <Text style={{ marginHorizontal: 15, fontWeight: '500', fontSize: 16 }}>Correo:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={texto => guardarCorreo(texto)}
                        />
                    </View>
                    <View>
                        <Text style={{ marginHorizontal: 15, fontWeight: '500', fontSize: 16, marginTop: 10 }}>Contraseña:</Text>
                        <TextInput secureTextEntry={true}
                            style={styles.input}
                            onChangeText={texto => guardarPassword(texto)}
                        />
                    </View>
                    <TouchableHighlight style={styles.btnIngresa} onPress={() => Sesion()}>
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>Iniciar Sesión</Text>
                    </TouchableHighlight>
                    <Text style={{ marginTop: 10, fontSize: 14 }}>ó</Text>
                    <TouchableHighlight style={styles.btnRegistra} onPress={() => navigation.navigate("Registrate")}>
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 15 }}>Registrate</Text>
                    </TouchableHighlight>
                </View>
            </ImageBackground>
        </>
    )
}
export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 90
    },
    input: {
        width: 300,
        height: 40,
        borderColor: '#00518C',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10,
        marginHorizontal: 15
    },
    btnIngresa: {
        backgroundColor: '#65b32e',
        width: 300,
        height: 40,
        marginHorizontal: 15,
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'

    },
    fondo: {
        flex: 1,
    },
    btnRegistra: {
        marginTop: 10,
        backgroundColor: "#00518C",
        width: 300,
        height: 40,
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'center'
    }
})