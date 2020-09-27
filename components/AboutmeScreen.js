import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

export default function AboutmeScreen() {
    return (
            <ImageBackground source={require('../itme.gif')} style={styles.backdrop}></ImageBackground>   
    );
}
const styles = StyleSheet.create({
    backdrop: {
        width : "100%",
        height : "100%",
    },
})