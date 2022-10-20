import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
//import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Scanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

/*  async function salvarNota(){
    const umaNota = {
      id: {type},
      texto: data,
    }
    await AsyncStorage.setItem(umaNota.id, umaNota.texto)
    mostraNota()
  }

  async function mostraNota(){
    console.log(await AsyncStorage.getItem("1"))
  }
*/
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Código ${type} - ${data} foi escaneado com sucesso!`);
  };

  if (hasPermission === null) {
    return <Text>Pedindo permissão da câmera</Text>;
  }
  if (hasPermission === false) {
    return <Text>Sem acesso a câmera</Text>;
  }

  return (
    <>
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}/>
        {scanned && <Button title={'Escanear novamente'} onPress={() => setScanned(false)}/>}
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});