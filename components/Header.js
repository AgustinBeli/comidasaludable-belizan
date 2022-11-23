import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

export default Header

const styles = StyleSheet.create({
    header: {
        paddingTop: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontSize: 18,
    },
})