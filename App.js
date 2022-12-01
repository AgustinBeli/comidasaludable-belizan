import { StyleSheet, View, Button } from 'react-native';
import Header from './components/Header';
import { useFonts } from 'expo-font';
import Form from './screens/Form';
import { useState } from 'react';


export default function App() {

  const [add, setAdd] = useState(false)

  const [loaded] = useFonts({
    Montserrat: require('./assets/fonts/Montserrat-Italic-VariableFont_wght.ttf')
  })


  let content = (
    <View style={styles.container}>
      <Header title={'Stock Almacenes'} newStyles={{ fontFamily: 'Montserrat' }} />
      <View style={styles.start}>
        <Button title="Comenzar" onPress={() => setAdd(true)} />
      </View>
    </View >
  )

  if (add === false) {
    content = content

  } else {
    content = (
      <View style={styles.container}>
        <Header title={'Stock Almacenes'} newStyles={{ fontFamily: 'Montserrat' }} />
        <Form />
      </View >
    )
  }

  return content
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 30,
    paddingBottom: 30,
    backgroundColor: '#1f1f1f',
    alignItems: 'center',
  },
  start: {
    paddingTop: 300,
    margin: 40,
  },
});