import { StyleSheet } from 'react-native'

const globalStyles = StyleSheet.create({
    contenedor: {
        flex: 1,

    },
    boton: {
        backgroundColor: '#65b32e',

    },
    botonTexto: {
        textTransform: 'uppercase',
        color: '#fff'
    },
    contenido: {
        marginHorizontal: '2.5%',
        flex: 1
    },
    titulo: {
        textAlign: 'center',
        marginTop: 40,
        marginBottom: 20,
        fontSize: 30,
        fontWeight: 'bold'
    },
    imagen: {
        height: 300,
        width: '100%'
    },
    cantidad: {
        marginVertical: 20,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold'
    },
    botonTextoAzul: {
        backgroundColor: '#00518C'
    }
})

export default globalStyles