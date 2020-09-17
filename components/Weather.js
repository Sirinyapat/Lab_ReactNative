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
        <View style={styles.container}>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <View style={styles.crop}>
                <View>
                    <Text style={styles.textzip}>{"\n"}Zip Code is {props.zipCode}.{"\n"}</Text>
                    <Forecast {...forecastInfo} />
                </View>
            </View>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
    },
    container: {
        flex: 1,
        width: '100%',
        paddingTop: 25,
        
    },
    textzip: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
     
    },
    crop: {
        backgroundColor: 'black',
        opacity: 0.4,
    },

});
