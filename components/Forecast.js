import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

export default function Forecast(props) {
    return (
        
            <View style={styles.center}>
                <Text style={styles.font}>{props.main}</Text>
                <Text style={styles.font2}>{props.description}</Text>
                <Text style={styles.font}>{props.temp} <Text style={styles.font2}>°C</Text> </Text>
            </View>
            
    );
}

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
    },
    font: {
        fontSize: 40,
        color: 'white',
        padding: 20,
    },
    font2: {
        fontSize: 20,
        color: 'white',
        padding: 20,   
    }
});