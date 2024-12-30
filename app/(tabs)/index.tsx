import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={style.container}>
            <Text>hi</Text>
        </View>
    );
};
const style = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
});

export default HomeScreen;
