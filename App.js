import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import { useFonts } from 'expo-font';
import Home from './screens/Home';
import Form from './screens/Form';


export default function App() {

  const [loaded] = useFonts({
    Montserrat: require('./assets/fonts/Montserrat-Italic-VariableFont_wght.ttf')
  })

  return (

    <View style={styles.container}>
      <Header title={'Stock Almacenes'} newStyles={{ fontFamily: 'Montserrat' }} />
      <Home />
      <Form />
      <View style={styles.addItem}>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#1f1f1f',
    alignItems: 'center',
  },
});