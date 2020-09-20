import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Forecast from './Forecast';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
    })
    return (
        <View>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <View style={styles.bg}>
                <View>
                    <Text style={styles.font}>Zip code is {props.zipCode}.</Text>
                    <Forecast {...forecastInfo} />
                </View>
            </View>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    bg: {
        backgroundColor: 'black',
        width: '100%',
        height: 270,
        opacity: 0.4,
        alignItems: 'center',
        paddingTop: 25,
    },
    font: {
        fontSize: 20,
        color: 'white',
    }
});