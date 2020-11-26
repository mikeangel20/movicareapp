import {NavigationContainer, useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Banner} from 'react-native-paper';
import {Appbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5'

const MyComponent = () => {
  const [visible, setVisible] = React.useState(true);
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');
  const navigation = useNavigation();

  return (
    <ScrollView>
      <Appbar.Header>
        <Button
          iconLeft
          transparent
          primary
          onPress={() => navigation.navigate('Perfil')}>
          <Icon name="user" style={{color: '#fff', fontSize: 20}} />

        </Button>
        <Appbar.Content title="Servicios" style={{marginLeft: 50}} />
        <Button
          iconLeft
          transparent
          primary
          onPress={() => navigation.navigate('Resumen')}>
          <Icon name="cart-plus" style={{color: '#fff', fontSize: 20}} />
          <Text>Pub</Text>
        </Button>
      </Appbar.Header>
      <View>
        <Banner
          visible={visible}
          actions={[
            {
              label: 'OK',
              color: '#65b32e',
              onPress: () => setVisible(false),
            },
            {
              label: 'Ver Más',
              color: '#65b32e',
              onPress: () => setVisible(false),
            },
          ]}
          icon={({size}) => (
            <Image
              source={{
                uri: 'https://movicaremx.com/img_app/Cliente.png',
              }}
              style={{
                width: size,
                height: size,
              }}
            />
          )}>
          Pruebas COVID-19 hasta la puerta de tu casa
        </Banner>

        <View style={{flexDirection: 'row'}}>
          <View style={styles.card}>
            <Text style={styles.titulo}>LABORATORIO</Text>
            <Text style={styles.contenido}>
              Análisis clínicos confiables, si no puedes acudir a uno, nosotros
              vamos hacia ti.
            </Text>
            <View style={{marginTop: 20}}>
              <Image
                source={{
                  uri: 'https://movicaremx.com/img_app/Laboratorio.png',
                  width: 100,
                  height: 100,
                }}
              />
            </View>
            <Button
              onPress={() => navigation.navigate('Menu')}
              style={styles.vBoton}>
              <Text style={styles.tBoton}>Ver más</Text>
            </Button>
          </View>

          <View style={styles.card}>
            <Text style={styles.titulo}>CONSULTA</Text>
            <Text style={{color: '#00518c', fontWeight: 'bold', fontSize: 18}}>
              MÉDICA
            </Text>
            <Text style={styles.contenido}>
              Los mejores especialistas hasta la puerta de tu casa.
            </Text>
            <View style={{marginTop: 20}}>
              <Image
                source={{
                  uri:
                    'https://movicaremx.com/img_app/Consulta%20me%CC%81dica.png',
                  width: 100,
                  height: 100,
                }}
              />
            </View>
            <Button style={styles.vBoton}>
              <Text style={styles.tpBoton}>Próximamente</Text>
            </Button>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={styles.card}>
            <Text style={styles.titulo}>RAYOS X</Text>
            <Text style={styles.contenido}>
              Radiografías realizadas con equipo de alta calidad.
            </Text>
            <View style={{marginTop: 20}}>
              <Image
                source={{
                  uri: 'https://movicaremx.com/img_app/Rayos%20x.png',
                  width: 100,
                  height: 100,
                }}
              />
            </View>
            <Button style={styles.vBoton}>
              <Text style={styles.tpBoton}>Próximamente</Text>
            </Button>
          </View>

          <View style={styles.card}>
            <Text style={styles.titulo}>FARMACIA</Text>
            <Text style={styles.contenido}>
              Amplio catálogo de medicamentos para tu bienestar integral.
            </Text>
            <View style={{marginTop: 20}}>
              <Image
                source={{
                  uri: 'https://movicaremx.com/img_app/Farmacia.png',
                  width: 100,
                  height: 100,
                }}
              />
            </View>
            <Button style={styles.vBoton}>
              <Text style={styles.tpBoton}>Próximamente</Text>
            </Button>
          </View>
        </View>

        <View>
          <View style={styles.card}>
            <Text style={styles.titulo}>AMBULANCIA</Text>
            <View style={{flexDirection: 'row', flex: 1}}>
              <Image
                style={{marginLeft: 10}}
                source={{
                  uri: 'https://movicaremx.com/img_app/Ambulancia.png',
                  width: 100,
                  height: 100,
                }}
              />
              <Text style={styles.contenido2}>
                Traslados programados, con personal y equipo a la vanguardia.
              </Text>
            </View>
            <Button style={styles.vBoton}>
              <Text style={styles.tpBoton}>Próximamente</Text>
            </Button>
          </View>
        </View>

        <View>
          <View style={styles.card}>
            <Text style={styles.titulo}> COVID-19</Text>
            <View style={{flexDirection: 'row', flex: 1}}>
              <Image
                style={{marginLeft: 10}}
                source={{
                  uri: 'https://movicaremx.com/img_app/covid.png',
                  width: 100,
                  height: 100,
                }}
              />
              <Text style={styles.contenido2}>
                Toma de pruebas para la prevención y/o diagnóstico confiable de
                COVID-19.
              </Text>
            </View>
            <Button
              onPress={() => navigation.navigate('Menu')}
              style={styles.vBoton}>
              <Text style={styles.tBoton}>Ver Más</Text>
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MyComponent;

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    marginHorizontal: 10,
    marginBottom: 30,
    borderRadius: 15,
    flex: 1,
    backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    color: '#00518c',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
  },
  contenido: {
    textAlign: 'center',
    color: '#000000',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  contenido2: {
    textAlign: 'center',
    color: '#000000',
    flex: 1,
    marginTop: 10,
  },
  vBoton: {
    backgroundColor: '#ffff',
    width: '60%',
    borderRadius: 10,
    marginBottom: 30,
    marginTop: 15,
  },
  tpBoton: {
    textAlign: 'center',
    color: '#B4B4B4',
    fontSize: 10,
  },
  tBoton: {
    textAlign: 'center',
    color: '#65b32e',
    fontSize: 10,
  },
});
