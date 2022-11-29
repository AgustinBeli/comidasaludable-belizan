import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Home = ({ onStart }) => {
    return (
        <View style={styles.button}>
            <Button title='Comenzar' onPress={onStart} />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    button: {
        padding: 50,
    },
})