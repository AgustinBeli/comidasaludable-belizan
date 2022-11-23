import { StyleSheet, Text, View, Pressable, Modal, } from 'react-native'
import React from 'react'

const ModalList = ({ isVisible, actionDeleteItem }) => {

    return (
        <Modal animationType="fade" transparent={true} visible={isVisible} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <View style={styles.box}>
                <View style={styles.boxPrincipal}>
                    <View style={styles.boxSecundario}>
                        <Text>¿Desea eliminar este articulo?</Text>
                        <Pressable
                            onPress={() => actionDeleteItem()}
                            style={styles.boxSecundarioForm}
                        >
                            <Text>Eliminar</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ModalList

const styles = StyleSheet.create({
    box: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    boxPrincipal: {
        height: 100,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
    },

    boxSecundario: {

        alignItems: 'center',
    },

    boxSecundarioForm: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 25,
        width: 70,
        borderRadius: 15,
        backgroundColor: '#02F8D3',
    },
})