import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ModalList from '../components/ModalList';

const Form = () => {
    const [textItem, setTextItem] = useState('')
    const [itemList, setItemList] = useState([])
    const [modalVisible, setModalVisible] = useState(false);
    const [itemSelected, setItemSelected] = useState({});

    const onHandleChangeItem = (t) => setTextItem(t);

    const addItem = () => {
        setItemList(currentItems => [
            ...currentItems,
            { id: Math.random().toString(), value: textItem }
        ]);
        setTextItem('');
    };

    const selectedItem = (id) => {
        setItemSelected(itemList.find((item) => item.id === id));
        setModalVisible(true);
    };

    const deleteItem = () => {
        setItemList((currentState) =>
            currentState.filter((item) => item.id !== itemSelected.id));
        setItemSelected({});
        setModalVisible(false);
    };

    const renderItem = ({ item }) => (
        <View style={styles.items}>
            <TouchableOpacity onPress={() => selectedItem(item.id)}>
                <Text>{item.value}</Text>
            </TouchableOpacity>
        </View>
    );

    return (

        <View style={styles.container}>
            <View style={styles.addItem}>
                <TextInput
                    value={textItem}
                    style={styles.input}
                    placeholder='Agregar Articulo'
                    placeholderTextColor='white'
                    onChangeText={onHandleChangeItem}
                />
                <TouchableOpacity style={styles.buttom} onPress={addItem}>
                    <Text>agregar</Text>
                </TouchableOpacity>
            </View >
            <View>
                <FlatList
                    data={itemList}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <ModalList isVisible={modalVisible} actionDeleteItem={deleteItem} />
        </View >
    );
}

export default Form

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        marginTop: 50,
        backgroundColor: '#1f1f1f',
        alignItems: 'center',
    },

    addItem: {
        marginTop: 50,
        flexDirection: 'row',
    },

    input: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        width: 200,
        color: 'white',
    },

    buttom: {
        backgroundColor: "#02F8D3",
        height: 30,
        width: 70,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
    },

    items: {
        marginTop: 20,
        color: 'white',
        backgroundColor: 'white',
        borderRadius: 15,
        alignItems: "center",
        width: 70,
    },
});