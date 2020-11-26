import React, { useState } from 'react';
import { Appbar, Button } from 'react-native-paper'
import { StyleSheet, View, Image, Platform, Alert } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Icon, Text, Textarea, Form } from 'native-base';
import { useNavigation } from '@react-navigation/native'
import DateTimePicker from '@react-native-community/datetimepicker';

const Atencion = () => {

    const navigation = useNavigation();

    //Datos de la queja o servicio
    const [folio, guardarFolio] = useState(''); //Folio
    const [correo, guardarCorreo] = useState(''); //Correo electrónico
    const [celular, guardarCelular] = React.useState(); //Número de celular
    const [servicio, guardarServicio] = React.useState(); //Servicio solicitado
    const [mensaje, guardarMensaje] = React.useState(); //Mensaje

    //Fecha y hora del servicio
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    const verInfo = () => {
        if (folio === '' || correo === '' || celular === '' || servicio === '' || mensaje === '' || date === '') {
            Alert.alert(

                'Campos vacios, verifica',
                'Debes llenar todos los campos que se muestran en pantalla.',
                [{ text: 'Aceptar', style: 'cancel' }]
            )
        } else {
            console.log(folio, correo, celular, servicio, mensaje, date)
        }
        //redireccionar
        navigation.navigate('Perfil');
    }

    return (
        <>

            <ScrollView>

                <Appbar.Header>
                    <Button iconLeft transparent primary
                        onPress={() => navigation.navigate('UsuarioOpciones')}
                    >
                        <Icon name='arrow-back' style={{ color: '#fff' }} />
                    </Button>
                    <Appbar.Content title="Atención al cliente" style={{ marginLeft: 50 }} />
                </Appbar.Header>

                <View style={styles.contenedor}>
                    <Image
                        source={{ uri: 'https://movicaremx.com/img_app/header-Form.png', width: '100%', height: 170, marginTop: 10 }}
                    />
                    <Text style={styles.titulo}>QUEJAS Y SUGERENCIAS </Text>

                    <Text style={styles.texto}>Indícanos tu folio de servicio</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(texto) => guardarFolio(texto)}
                        value={folio} />

                    <Text style={styles.texto}>Correo electrónico</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType='email-address'
                        textContentType='emailAddress'
                        onChangeText={(texto) => guardarCorreo(texto)}
                        value={correo} />

                    <Text style={styles.texto}>Número de celular</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType='phone-pad'
                        textContentType='telephoneNumber'
                        onChangeText={(texto) => guardarCelular(texto)}
                        value={celular} />

                    <Text style={styles.texto}>¿Cuál fue tu servicio solicitado?</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(texto) => guardarServicio(texto)}
                        value={servicio} />

                    <Text style={styles.texto}>Fecha de recepción del servicio</Text>

                    <Button style={styles.eBoton} onPress={showDatepicker}>
                        <Text style={styles.contenido}>Selecciona la fecha</Text>
                    </Button>
                    <Button style={styles.eBoton} onPress={showTimepicker}>
                        <Text style={styles.contenido}>Selecciona la hora</Text>
                    </Button>

                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                            style={{ color: '#FFF' }}

                        />
                    )}
                    <Text></Text>

                    <Text style={styles.texto}>Cuéntanos tu experiencia</Text>

                    <Form style={styles.input2}>
                        <Textarea rowSpan={5}
                            onChangeText={(mensaje) => guardarMensaje(mensaje)}
                            value={mensaje} />
                    </Form>

                    <Button style={styles.eBotonE} onPress={() => verInfo()}>
                        <Text style={styles.contenido}>ENVIAR</Text>
                    </Button>
                </View>
            </ScrollView>

        </>
    )
}

export default Atencion
const styles = StyleSheet.create({
    contenedor: {
        alignItems: 'center',
        backgroundColor: '#FFFF'
    },
    input: {
        backgroundColor: '#fff',
        width: '60%',
        height: 40,
        borderColor: '#00518C',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
    },
    input2: {
        backgroundColor: '#fff',
        width: '60%',
        height: 180,
        borderColor: '#00518C',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 15,
    },
    titulo: {
        color: '#00518c',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20,
        marginBottom: 10,
    },
    texto: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 15
    },
    eBoton: {
        marginTop: 10,
        marginBottom: 2,
        marginHorizontal: 15,
        borderRadius: 40,
        width: '60%',
        backgroundColor: "#65b23e",
    },
    eBotonE: {
        marginTop: 10,
        marginBottom: 40,
        marginHorizontal: 15,
        borderRadius: 40,
        width: '60%',
        backgroundColor: "#65b23e",
    },
    contenido: {
        color: '#FFFF',
        textAlign: 'center',
        marginRight: 10,
        marginLeft: 40,
        fontWeight: 'bold',
        fontSize: 15
    },
});