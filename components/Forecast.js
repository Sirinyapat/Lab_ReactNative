import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';


export default function Forecast(props) {
    return (
        
            <View style={styles.center}>
                <Text style={styles.font}>{props.main}</Text>
                <Text style={styles.font2}>{props.description}</Text>
                <Text style={styles.font}>  {props.temp} <Text style={styles.font2}>°C</Text> </Text>
            </View> 
            
    );
}

const styles = StyleSheet.create({
    center: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    font: {
        fontSize: 40,
        color: 'white',
        padding: 20,
        textAlign: 'center',
    },
    font2: {
        fontSize: 20,
        color: 'white',
        padding: 20,   
        textAlign: 'center',
    },
    icon: {
        textAlign: 'center',
        color: 'white',
    }
});