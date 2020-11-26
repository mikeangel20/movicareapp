import React from 'react'
import { View, StyleSheet, Image, } from 'react-native'
import {TouchableOpacity } from 'react-native-gesture-handler'
import { withRouter } from 'react-router-dom'
import { Button, Paragraph, Dialog, Portal,DefaultTheme, Provider as PaperProvider } from 'react-native-paper'


const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#00518C',
      accent: '#f1c40f',
    },
  };

const Inicio = () =>{
    const [visible, setVisible] = React.useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);
    
    return(
        <>
        <PaperProvider theme={theme}>
            <View style={{flex:1, flexDirection:'column'}}>
                <View>
                    <Portal>
                        <Dialog visible={visible} onDismiss={hideDialog}>
                        <Dialog.Title>Oops...</Dialog.Title>
                        <Dialog.Content>
                            <Paragraph>Lo sentimos, pronto estaremos listos para brindarte este servicio</Paragraph>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={hideDialog}>Done</Button>
                        </Dialog.Actions>
                        </Dialog>
                    </Portal>
                </View>
                <View style={{flex:1, flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>showDialog()}>
                        <Image style={styles.img} source={{ uri: 'https://movicaremx.com/home/Vista/imgExtras/laboratorio_covid.png', width: 350, height: 150, }}/>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1, flexDirection:'row'}}>

                    <TouchableOpacity onPress={()=> console.log('Consultas')}>
                        <Image style={styles.img} source={{ uri: 'https://movicaremx.com/home/Vista/imgExtras/consulta_covid.png', width:150, height: 150, }}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>showDialog()}>
                        <Image style={styles.img} source={{ uri: 'https://movicaremx.com/home/Vista/imgExtras/laboratorio.png', width: 150, height: 150, }}/>
                    </TouchableOpacity>
                   

                    

                </View>

                <View style={{flex:1, flexDirection:'row'}}>
               
                    
                <TouchableOpacity onPress={()=>showDialog()}>
                        <Image style={styles.img} source={{ uri: 'https://movicaremx.com/home/Vista/imgExtras/farmacia_covid.png', width: 150, height: 150, }}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>showDialog()}>
                        <Image style={styles.img} source={{ uri: 'https://movicaremx.com/home/Vista/imgExtras/rx_covid.png', width: 150, height: 150, }}/>
                    </TouchableOpacity>
                </View>

                <View style={{flex:1, flexDirection:'row'}}>

               
                    <TouchableOpacity onPress={()=>showDialog()}>
                        <Image style={styles.img} source={{ uri: 'https://movicaremx.com/home/Vista/imgExtras/ambulancia2.png', width:350, height: 150, }}/>
                    </TouchableOpacity>
                </View>
               
               
                    
            </View>
           
        </PaperProvider>
        </>
    )
}

export default Inicio

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        
        
    },
    img:{
        marginHorizontal:25,
        marginVertical:10,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',    
    },
})