import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [textItem, setTextItem] = useState('')
  const [itemList, setItemList] = useState([])

  const onHandleChangeItem = (t) => {
    setTextItem(t)
  }

  const addItem = () => {
    setItemList(currentItems => [
      ...currentItems,
      { id: Math.random().toString(), value: textItem }
    ])
    setTextItem('')
  }

  const renderItem = ({ item }) => (
    <View style={styles.items}>
      <View style={styles.item}>
        <Text>   {item.value}   </Text>
        <Button title='❌' />
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      <Text>Tienda de Verduras</Text>
      <View style={styles.addItem}>
        <TextInput
          value={textItem}
          style={styles.input}
          placeholder='Agregar Articulo'
          onChangeText={onHandleChangeItem}
        />
        <Button title='AGREGAR' onPress={addItem} />
      </View >
      <FlatList
        data={itemList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 50,
  },

  addItem: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    width: 200,
  },

  items: {
    marginTop: 50,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },


});