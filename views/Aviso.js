import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground, Linking } from 'react-native'
import { Container, Content, Button, List, ListItem, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native'



const Aviso = () => {

    const navigation = useNavigation()
    return (
        
            <Container>
                <Content>
                <Text style={styles.titulo}>
                    Aviso de Privacidad
                </Text>
                <Text style={styles.texto}>
                    MoviCare Servicios Integrales S.A.P.I. de C.V., con domicilio en Fray Pedro de Gante No.320, Col. Centro Texcoco México C.P. 56100,{"\n"}es el responsable del uso y recabar sus datos personales así como el resguardo de los mismos.{"\n"}Cumpliendo con los artículos 15 y 16 de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
                </Text>

                <Text style={styles.titulo}>Datos Personales</Text>
                <Text style={styles.texto}>
                    MoviCare Servicios Integrales obtendrá de usted los datos personales necesarios para la adecuada prestación de nuestros servicios,{"\n"}la realización de sus estudios y/o satisfacer la necesidad requerida.
                </Text>

                <Text style={styles.titulo}>De Forma Directa</Text>
                <Content>
                    <List>
                        <ListItem>
                            <Text>a. Nombre completo</Text>
                        </ListItem>
                        <ListItem>
                            <Text>b. Fecha de nacimiento</Text>
                        </ListItem>
                        <ListItem>
                            <Text>c. Sexo</Text>
                        </ListItem>
                        <ListItem>
                            <Text>d. Domicilio</Text>
                        </ListItem>
                        <ListItem>
                            <Text>e. Teléfono Fijo/Móvil</Text>
                        </ListItem>
                        <ListItem>
                            <Text>f. Correo electrónico</Text>
                        </ListItem>
                    </List>
                </Content>


                <Text style={styles.titulo}>Finalidades del Tratamineto de Datos Personales</Text>
                <Text style={styles.texto}>
                    La finalidad de que nos proporcione sus datos directamente de usted será para: </Text>
                <Content>
                    <List>
                        <ListItem>
                            <Text>1.Realizar los estudios clínicos solicitados por el cliente</Text>
                        </ListItem>
                        <ListItem>
                            <Text>2.Proponer estudios complementarios</Text>
                        </ListItem>
                        <ListItem>
                            <Text>3.Contactar a sus familiares y/o medico en caso de alguna urgencia (incidencia)</Text>
                        </ListItem>
                        <ListItem>
                            <Text>4.Realizar el cobro por el servicio (tarjeta de débito, tarjeta de crédito, efectivo, etc.)</Text>
                        </ListItem>
                        <ListItem>
                            <Text>5.Proporcionar factura para las personas morales</Text>
                        </ListItem>
                        <ListItem>
                            <Text>6.Compartir sus comentarios, sugerencias y quejas de nuestros servicios</Text>
                        </ListItem>
                        <ListItem>
                            <Text>7.Tener una base de datos que permitan identificar a nuestros clientes asiduos</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.texto}>8.Poder contactarle para cualquier tema relacionado a los servicios que le prestemos o del presente aviso de privacidad.</Text>
                        </ListItem>
                    </List>
                </Content>

                <Text style={styles.titulo}>Limitantes del Uso y Divulgación de Datos Personales</Text>
                <Text style={styles.texto}>
                    Con Objeto de que usted pueda limitar el uso y divulgación de su información personal, le ofrecemos los siguientes medios:
                    </Text>
                <List>
                    <ListItem>
                        <Text style={styles.texto}>I.Su inscripción en el Registro Público para Evitar Publicidad, que está a cargo del Procuradora Federal del Consumidor (PROFECO) con la finalidad de que sus datos personales no sean utilizados para recibir publicidad o promociones de empresas de bienes o servicios.Para mayor información sobre este registro, usted puede consultar el portal de internet de la PROFECO, o bien ponerse en contacto directo con ésta.</Text>
                    </ListItem>
                    <ListItem>
                        <Text style={styles.texto}>II.Su registro en el listado de exclusión, a fin de que sus datos personales no sean tratados para fines mercadotécnicos, publicitarios o de posesión comercial por nuestra parte. Para mayor información, llamar a nuestros números telefónicos (01595)-95-41-140 y/o (01595)-95-46-296, de igual forma le pedimos enviar un correo electrónico a nuestra página www.movicaremx.com
 solicitando la exclusión de sus datos personales para dichos efectos solamente.</Text>
                    </ListItem>
                </List>

                <Text style={styles.titulo}>Derechos ARCO</Text>
                <Text style={styles.texto}>
                    Cumpliendo con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares usted tiene derecho a conocer que datos personales tenemos de usted por lo tanto podrá ejercer en cualquier momento el Acceso, Rectificación, Cancelación y Oposición del uso de los mismos ante la sociedad.
                </Text>

                <Text style={styles.titulo}>Transferencia de Datos</Text>
                <Text style={styles.texto}>
                    Si es necesario que la prueba solicitada sea realizada en un laboratorio de referencia, sus datos pueden ser transferidos y tratados por personas distintas a esta empresa.Si usted no manifiesta su oposición para que sus datos personales sean transferidos,se entenderá que ha otorgado su consentimiento para ello.
                </Text>
                <Text style={styles.texto}>
                    La empresa podrá trasmitir sus datos personales a personas físicas y morales incluyendo:
                    </Text>
                <List>
                    <ListItem>
                        <Text>a.Médicos</Text>
                    </ListItem>
                    <ListItem>
                        <Text>b.Peritos</Text>
                    </ListItem>
                    <ListItem>
                        <Text>c.Instituciones Médicas</Text>
                    </ListItem>
                    <ListItem>
                        <Text>d.Prestadores de Servicio</Text>
                    </ListItem>
                    <ListItem>
                        <Text>e.Laboratorios</Text>
                    </ListItem>
                    <ListItem>
                        <Text>f.Abogados, o en su caso para el cumplimiento de cualquier obligación de la empresa con el contrayente</Text>
                    </ListItem>
                </List>
                <Text style={styles.texto}>
                    Usted podrá solicitar que sus datos personales no sean trasmitidos,lo que podrá solicitar directamente en el domicilio de la empresa requisitando debidamente el formato “Solicitud de Derechos ARCO” que se encuentra disponible en la dirección</Text>
                <Text style={{ color: '#00518C', textAlign: 'center' }} onPress={() => Linking.openURL('https://movicaremx.com/home/DocumentacionMovicareProvisionalv0.2/SolicituddeDerechosARCO.pdf')}>www.movicaremx.com
                                </Text>

                <Text style={styles.titulo}>Los Procedimientos y Cambios en el Aviso de Privacidad</Text>
                <Text style={styles.texto}>
                    MoviCare Servicios Integrales S.A.P.I. de C.V., se reserva el derecho de modificar o actualizar en cualquier momento el contenido del presente Aviso de Privacidad, para la obtención de actualización normativa, políticas internas y nuevos requisitos para la prestación de nuestros servicios.
                </Text>
                <Text style={styles.texto}>
                    Dichas modificaciones estarán disponibles al público a través de los siguientes medios: nuestra página web </Text>
                <Text style={{ color: '#00518C', textAlign: 'center' }} onPress={() => Linking.openURL('https://movicaremx.com/home/Vista/')}>www.movicaremx.com</Text>
                <Text style={styles.texto}>O bien por los anuncios dentro de nuestras instalaciones.</Text>
                
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Button
                        block
                        style={{ backgroundColor: '#65b32e', borderRadius: 10, width: '60%', alignItems: 'center', marginBottom: 40, marginTop: 20 }}
                        onPress={() =>navigation.navigate('Ficha2')}>
                        <Text>Regresar</Text>
                    </Button>
                </View>
                </Content>
            </Container>
        
    )
}


export default Aviso;

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "stretch",
        width: '99%'
    },
    contenedor: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center'
    },
    titulo: {
        textAlign: 'center',
        color: '#00518c',
        textTransform: 'uppercase',
        marginTop: 20

    },
    texto: {
        textAlign: 'justify',
        marginTop: 10,
        marginRight: 15,
        marginLeft: 15
    },
    cTotal: {
        marginTop: 10
    }
});
