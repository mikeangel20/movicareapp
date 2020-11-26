import React, { useState } from 'react';
import firebase from '../firebase1';
import { Text, StyleSheet, ImageBackground, View } from 'react-native';
import { ScrollView, TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'
import { RadioButton } from 'react-native-paper';
import { Alert } from 'react-native'
import CryptoJS from 'react-native-crypto-js'
const Registrate = () => {
    const navigation = useNavigation();
    const [nombre, guardarNombre] = useState('');
    const [apellidos, guardarApellidos] = useState('');
    const [correo, guardarCorreo] = useState('');
    const [telefono, guardarTelefono] = useState('');
    const [edad, guardarEdad] = useState('');
    const [calle, guardarCalle] = useState('');
    const [delegacion, guardarDelegacion] = useState('');
    const [estado, guardarEstado] = useState('');
    const [numeroExt, guardarNumExt] = useState('');
    const [numeroInt, guardarNumInt] = useState('');
    const [ciudad, guardarCiudad] = useState('');
    const [cp, guardarCP] = useState('');
    const [password, guardarPassword] = useState('');
    const [password1, guardarPassword1] = useState('');
    const [checked, setChecked] = React.useState('first');
    let alerta;

    const EncriptarPassword = () => {
        let pa = CryptoJS.AES.encrypt(password, 'movicaremxSGNddmm').toString();
        return pa
    }

    const AsignarSexo = () => {
        let se = "";
        if (checked === "first") {
            se = "M";
        } else {
            se = "F";
        }
        return se;
    }

    const ValidarCorreo = () => {
        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return expression.test(String(correo).toLowerCase())
    }

    const Validacion = () => {
        let band = false;
        if (nombre === '') {
            alerta = "El campo nombre está vacío.";
        } else if (apellidos === '') {
            alerta = "El campo apellidos está vacío.";
        } else if (correo === '') {
            alerta = "El campo correo electronico está vacío.";
        } else if (!ValidarCorreo()) {
            alerta = "Correo inválido.";
        } else if (telefono === '') {
            alerta = "El campo número de teléfono está vacío.";
        } else if (telefono.length < 10 || telefono.length > 15) {
            alerta = "El número de teléfono debe ser de 10 dígitos.";
        } else if (edad === '') {
            alerta = "El campo edad está vacío.";
        } else if (edad < 16) {
            alerta = "La edad miníma válida es de 16 años.";
        } else if (calle === '') {
            alerta = "El campo calle está vacío.";
        } else if (delegacion === '') {
            alerta = "El campo delegación o municipio está vacío.";
        } else if (estado === '') {
            alerta = "El campo estado está vacío.";
        } else if (numeroExt === '') {
            alerta = "El campo número exterior está vacío.";
        } else if (ciudad === '') {
            alerta = "El campo ciudad está vacío.";
        } else if (cp === '') {
            alerta = "El campo código postal está vacío.";
        } else if (cp.length != 5) {
            alerta = "El código postal debe de ser de 5 digitos.";
        } else if (isNaN(cp)) {
            alerta = "El código postal debe de ser sólo números.";
        } else if (password != password1) {
            alerta = "Las contraseñas no coinciden.";
        } else if(password.length < 8){
            alerta = "La contraseña debe contener mínimo 8 caracteres.";
        }else {
            band = true;
        }
        return band;
    }

    const guardarCliente = () => {
        if (!Validacion()) {
            Alert.alert(
                'Oops...',
                alerta, [
                { text: 'OK', style: 'cancel' }
            ])
        } else {
            try {
                firebase.auth().createUserWithEmailAndPassword(correo, password).then(function () {
                    firebase.database().ref('usuario').push().set({
                        correo,
                        password: EncriptarPassword(),
                        direccion: {
                            calle,
                            delegacion,
                            estado,
                            numeroExt,
                            numeroInt,
                            ciudad,
                            cp
                        },
                        persona: {
                            nombre,
                            apellidos,
                            telefono,
                            sexo: AsignarSexo()
                        }
                    });
                    firebase.auth().signInWithEmailAndPassword(correo, password).catch(function (error) {
                        Alert.alert(
                            'Oops ...',
                            'Ha ocurrido un error.\n' + error.message,
                            [{ text: 'OK', style: 'cancel' }]
                        )
                    });
                    Alert.alert(
                        '¡Registro exitoso!',
                        'Sus datos han sido guardados con éxito.',
                        [{
                            text: 'Confirmar',
                            onPress: async () => {
                                navigation.navigate("Ficha2");
                            }
                        }]
                    );
                }).catch(function () {
                    Alert.alert(
                        'Oops ...',
                        'Ya hay un usuario registrado con ese correo.',
                        [{ text: 'OK', style: 'cancel' }]
                    )
                });
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <>
            <View style={styles.container}>
                <ImageBackground style={styles.fondo} source={{ uri: 'https://www.movicaremx.com/img_app/Login-fondo.png', width: 350, height: 150, }}>
                    <View style={styles.inputCont} >
                        <ScrollView>

                            <TextInput
                                style={styles.input}
                                placeholder="Nombre"
                                onChangeText={texto => guardarNombre(texto)}
                                value={nombre}
                            />
                            <TextInput
                                style={styles.input2}
                                placeholder="Apellidos"
                                onChangeText={texto => guardarApellidos(texto)}
                                value={apellidos}
                            />
                            <TextInput
                                style={styles.input2}
                                placeholder="Correo Electrónico"
                                onChangeText={texto => guardarCorreo(texto)}
                                value={correo}
                            />
                            <TextInput
                                keyboardType="phone-pad"
                                style={styles.input2}
                                placeholder="Teléfono"
                                onChangeText={texto => guardarTelefono(texto)}
                                value={telefono}
                            />
                            <View style={styles.rows}>
                                <View style={styles.rows}>
                                    <Text style={{ justifyContent: 'center', alignContent: 'center' }}>Masculino</Text>
                                    <RadioButton
                                        value="first"
                                        color="#65b32e"
                                        status={checked === 'first' ? 'checked' : 'unchecked'}
                                        onPress={() => setChecked('first')}
                                    />
                                </View>
                                <View style={styles.rows}>
                                    <Text>Femenino</Text>
                                    <RadioButton
                                        value="second"
                                        color="#65b32e"
                                        status={checked === 'second' ? 'checked' : 'unchecked'}
                                        onPress={() => setChecked('second')}
                                    />
                                </View>
                            </View>
                            <TextInput
                                keyboardType="number-pad"
                                style={styles.input2}
                                placeholder="Edad"
                                onChangeText={texto => guardarEdad(texto)}
                                value={edad}
                            />
                            <TextInput
                                style={styles.input2}
                                placeholder="Calle"
                                onChangeText={texto => guardarCalle(texto)}
                                value={calle}
                            />
                            <TextInput
                                style={styles.input2}
                                placeholder="Delegación/Municipio"
                                onChangeText={texto => guardarDelegacion(texto)}
                                value={delegacion}
                            />
                            <TextInput
                                style={styles.input2}
                                placeholder="Estado"
                                onChangeText={texto => guardarEstado(texto)}
                                value={estado}
                            />

                            <View style={styles.inputCont1}>
                                <TextInput
                                    style={styles.input1}
                                    placeholder="No. Ext."
                                    onChangeText={texto => guardarNumExt(texto)}
                                    value={numeroExt}
                                />
                                <TextInput
                                    style={styles.input1}
                                    placeholder="No. Int."
                                    onChangeText={texto => guardarNumInt(texto)}
                                    value={numeroInt}
                                />
                            </View >

                            <View style={styles.inputCont1}>
                                <TextInput
                                    style={styles.input1}
                                    placeholder="Ciudad"
                                    onChangeText={texto => guardarCiudad(texto)}
                                    value={ciudad}
                                />
                                <TextInput
                                    textContentType="postalCode"
                                    keyboardType="numeric"
                                    style={styles.input1}
                                    placeholder="Código Postal"
                                    onChangeText={texto => guardarCP(texto)}
                                    value={cp}
                                />
                            </View>
                            <TextInput
                                secureTextEntry={true}
                                style={styles.input2}
                                placeholder="Contraseña"
                                onChangeText={texto => guardarPassword(texto)}
                            />
                            <TextInput
                                secureTextEntry={true}
                                style={styles.input2}
                                placeholder="Confirmar contraseña"
                                onChangeText={texto => guardarPassword1(texto)}
                            />
                            <TouchableHighlight
                                onPress={() => guardarCliente()}
                                style={styles.btnAceptar}>
                                <Text style={styles.btnText}>Aceptar</Text>
                            </TouchableHighlight>
                        </ScrollView>
                    </View>
                </ImageBackground>
            </View>
        </>
    )
}
export default Registrate;

const styles = StyleSheet.create({
    rows: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 0,
        alignContent: 'center',
        justifyContent: 'center'
    },
    outter: {
        position: 'absolute',
        paddingTop: 10,
        paddingLeft: 10,
        top: 20,
        left: 30,
        width: 170,
        height: 170,
        borderRadius: 160 / 2,
        backgroundColor: '#000',
    },
    btnText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: 'bold'
    },
    btnAceptar: {
        width: 300,
        height: 40,
        backgroundColor: "#65b32e",
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        marginVertical: 30,
        borderRadius: 10
    },
    fondo: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    input1: {
        flex: 1,
        backgroundColor: '#fff',
        width: '45%',
        height: 40,
        borderColor: '#00518C',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10,
        marginHorizontal: 10
    },
    input2: {
        backgroundColor: '#fff',
        width: '90%',
        height: 40,
        borderColor: '#00518C',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 15,
        marginHorizontal: 15
    },
    input: {
        backgroundColor: '#fff',
        width: '90%',
        height: 40,
        borderColor: '#00518C',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 45,
        marginHorizontal: 15
    },
    fondo: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    container: {
        flex: 1,
        flexDirection: "column"
    },
    inputCont: {
        marginTop: '60%',
        alignContent: 'center',
        alignItems: 'center'
    },
    inputCont1: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 5,
        alignContent: 'center',
        alignItems: 'center'
    }
})