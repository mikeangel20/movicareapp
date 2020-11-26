import React, { useState } from 'react'
import { Alert } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { StyleSheet, View, ImageBackground } from 'react-native'
import PickerExample from '../Components/UI/Picker'
import firebase from '../firebase1'
import { Container, Content, Text, Card, CardItem, Body, Button } from 'native-base';
import { Checkbox } from 'react-native-paper';
const Ficha2 = ({ navigation }) => {

    // DATOS DEL FORMULARIO
    const [peso, guardarPeso] = useState(''); //Datos del peso
    const [altura, guardarAltura] = useState(''); //Datos de la altura
    const [checked, setChecked] = React.useState(false); //DIABETES
    const [checked1, setChecked1] = React.useState(false); //HIPERTENSIÓN
    const [checked2, setChecked2] = React.useState(false); // OTRAS ENFERMEDADES
    const [checked3, setChecked3] = React.useState(false); // NINUGUNA ENFERMEDAD
    const [enfermedad, guardarEnfermedad] = useState(''); //Datos de otra enfermedad
    const [checked4, setChecked4] = React.useState(false); // Si alergia
    const [checked5, setChecked5] = React.useState(false); // No alergia
    const [alergia, guardarAlergia] = useState(''); //Datos de la alergia
    const [checked6, setChecked6] = React.useState(false); // TÉRMINOS Y CONDICIONES
    const image = { uri: "https://movicaremx.com/img_app/background-Forms.png" }; //Background
    let alerta;
    const Validacion = () => {
        let band = false;
        if (peso === '') {
            alerta = "El campo peso está vacío.";
        } else if (peso < 0 || peso.length < 2) {
            alerta = "Peso no contiene un formato valido.";
        } else if (altura === '') {
            alerta = "El campo altura está vacío.";
        } else if (altura < 119 || altura.length < 3) {
            alerta = "Altura no contiene un formato valido.";
        } else if ((checked || checked1 || checked2) && checked3) {
            alerta = "Elige la opción correcta en 'Enfermedad'.";
        } else if (checked2 && enfermedad === '') {
            alerta = "El campo de enfermedad está vacío.";
        } else if (checked4 && checked5) {
            alerta = "Elige la opción correcta en 'Alergia'.";
        } else if (checked4 && alergia === '') {
            alerta = "El campo alergia está vacío.";
        } else if (checked === '' && checked1 === '' && checked2 === '' && checked3 === '' || !checked && !checked1 && !checked2 && !checked3) {
            alerta = "En caso de no tener ninguna enfermedad, favor de seleccionar 'Ninguna'.";
        } else if (checked4 == '' && checked5 == '' || !checked4 && !checked5) {
            alerta = "En caso de no tener ninguna alergia, favor de seleccionar 'No'.";
        } else if (!checked6) {
            alerta = "Es necesario aceptar 'Términos y condiciones'.";
        } else {
            band = true;
        }
        return band;
    }

    //guardar ficha médica
    const guardarFicha = () => {
        if (!Validacion()) {
            Alert.alert(
                'Oops...',
                alerta, [
                { text: 'OK', style: 'cancel' }
            ])
        } else {
            var usuario = firebase.auth().currentUser;
            if (usuario != null || usuario != undefined) {
                const usuariosAll = firebase.database().ref('usuario').orderByKey();
                usuariosAll.once("value")
                    .then(function (snapshot) {
                        var band = false;
                        var llave = "";
                        var llaveM = ""
                        snapshot.forEach(function (childSnapshot) {
                            var childData = childSnapshot.val();
                            const c1 = childData.correo;
                            const fichaMedica = childData.fichaMedica;
                            if (usuario.email === c1) {
                                llave = childSnapshot.key;
                                if (fichaMedica === undefined) {
                                    band = true; // No existe ficha Medica
                                } else {
                                    for (var key in fichaMedica) { //Si hay ficha medica entonces obtenemos la llave
                                        llaveM = key
                                    }
                                }
                            }
                        });
                        if (band) { // Si no existe ficha Medica, CREAMOS LA FICHA MEDICA
                            var llaveFM = firebase.database().ref("usuario/" + llave + "/fichaMedica").push().key;
                            firebase.database().ref("usuario/" + llave + "/fichaMedica/" + llaveFM).set({
                                altura: altura,
                                diabetes: checked,
                                hipertension: checked1,
                                otrasEnfermedades: checked2,
                                nigunaEnfermedad: checked3,
                                enfermedades: enfermedad,
                                alergiaSi: checked4,
                                alergiaNo: checked5,
                                alergia: alergia,
                                terminos: true,
                                peso: peso
                            });
                            /*var llaveRP = firebase.database().ref("usuario/" + llave + "/fichaMedica/" + llaveFM + "/registroPeso").push().key;
                            firebase.database().ref("usuario/" + llave + "/fichaMedica/" + llaveFM + "/registroPeso/" + llaveRP).set({
                                peso: peso
                            });*/
                        } else { // Si existe, solo actualizamos campos y creamo un nuevo peso
                            firebase.database().ref("usuario/" + llave + "/fichaMedica/" + llaveM).set({
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
                            /* var llaveRP = firebase.database().ref("usuario/" + llave + "/fichaMedica/" + llaveM + "/registroPeso").push().key;
                             firebase.database().ref("usuario/" + llave + "/fichaMedica/" + llaveM + "/registroPeso/" + llaveRP).set({
                                 peso: peso
                             }); */
                        }
                        Alert.alert(
                            '¡Registro exitoso!',
                            'Sus datos de ficha médica han sido guardados con éxito.',
                            [{
                                text: 'Confirmar',
                                onPress: async () => {
                                    navigation.navigate("Banner");
                                }
                            }]
                        );
                    });
            }else{
                navigation.navigate("Login");
            }
        }
    }


    return (
        <>
            <Container>
                <Content>
                    <ImageBackground source={image} style={styles.image}>
                        <Text style={styles.titulo}>Datos básicos de salud</Text>
                        <Text style={styles.subTitulo}>Peso:</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <TextInput
                                style={styles.input}
                                keyboardType="number-pad"
                                placeholder="(Ejemplo 88 kg)"
                                onChangeText={(texto) => guardarPeso(texto)}
                                value={peso}
                            />
                            <Text style={{ marginTop: 25, marginLeft: 2 }}>kg</Text>
                        </View>
                        <Text style={styles.subTitulo}>Altura:</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <TextInput
                                style={styles.input}
                                keyboardType="number-pad"
                                placeholder="(Ejemplo 150 cm)"
                                onChangeText={(texto) => guardarAltura(texto)}
                                value={altura}
                            />
                            <Text style={{ marginTop: 25, marginLeft: 2 }}>cm</Text>
                        </View>
                        <Text style={styles.subTitulo}>Tipo de Sangre:</Text>
                        <View style={{ alignItems: 'center' }}>
                            <PickerExample />
                        </View>
                        <Text style={styles.subTitulo}>¿Presentas alguna enfermedad?</Text>
                        <View style={{ alignItems: 'center', marginTop: 10, flexDirection: 'row', justifyContent: 'center' }}>
                            <Checkbox
                                color='#65b32e'
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => setChecked(!checked)}
                            />
                            <Text>Diabetes</Text>
                            <Checkbox
                                color='#65b32e'
                                status={checked1 ? 'checked' : 'unchecked'}
                                onPress={() => setChecked1(!checked1)}
                            />
                            <Text>Hipertensión</Text>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 20, flexDirection: 'row', justifyContent: 'center' }}>
                            <Checkbox
                                color='#65b32e'
                                status={checked2 ? 'checked' : 'unchecked'}
                                onPress={() => setChecked2(!checked2)}
                            />
                            <Text>Otra</Text>
                            <Checkbox
                                color='#65b32e'
                                status={checked3 ? 'checked' : 'unchecked'}
                                onPress={() => setChecked3(!checked3)}
                            />
                            <Text>Ninguna</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <TextInput
                                style={styles.input}
                                placeholder="En caso de otra, escribe ¿cuáles son?"
                                onChangeText={(texto) => guardarEnfermedad(texto)}
                                value={enfermedad}
                            />
                        </View>
                        <Text style={styles.subTitulo}>¿Presentas alguna alergia?</Text>
                        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                            <Checkbox
                                color='#65b32e'
                                status={checked4 ? 'checked' : 'unchecked'}
                                onPress={() => setChecked4(!checked4)}
                            />
                            <Text>Si</Text>
                            <Checkbox
                                color='#65b32e'
                                status={checked5 ? 'checked' : 'unchecked'}
                                onPress={() => setChecked5(!checked5)}
                            />
                            <Text>No</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <TextInput
                                style={styles.input}
                                placeholder="¿Cuáles son?"
                                onChangeText={(texto) => guardarAlergia(texto)}
                                value={alergia}
                            />
                        </View>
                        <Content padder>
                            <Card transparent>
                                <CardItem button onPress={() => navigation.navigate('Aviso')}>
                                    <Body style={{ alignItems: 'center', marginTop: 20, flexDirection: 'row', justifyContent: 'center' }}>
                                        <Checkbox
                                            color='#65b32e'
                                            status={checked6 ? 'checked' : 'unchecked'}
                                            onPress={() => setChecked6(!checked6)}
                                        />
                                        <Text>
                                            Acepto los {""}
                                        </Text>
                                        <Text style={{ color: '#00518c' }}>
                                            términos y condiciones
                                        </Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </Content>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Button
                                onPress={() => guardarFicha()}
                                style={{ backgroundColor: '#65b32e', borderRadius: 10, width: '60%', justifyContent: 'center', marginBottom: 40 }}>
                                <Text> Continuar </Text>
                            </Button>
                        </View>
                    </ImageBackground>
                </Content>
            </Container>
        </>
    )
}
export default Ficha2;
const styles = StyleSheet.create({
    titulo: {
        textAlign: 'center',
        color: '#00518c',
        textTransform: 'uppercase',
        marginTop: 210
    },
    subTitulo: {
        textAlign: 'center',
        color: '#00518c',
        textTransform: 'uppercase',
        marginTop: 10
    },
    input: {
        backgroundColor: '#fff',
        width: '60%',
        height: 40,
        borderColor: '#00518C',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10,
    },
    image: {
        flex: 1,
        resizeMode: "stretch",
        width: '99%'
    }
})