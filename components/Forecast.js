import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

export default function Forecast(props) {
    return (
        
            <View style={styles.textbox}>
                <Text style={styles.textmn}>{props.main}{"\n"}</Text>
                <Text style={styles.textdes}>{props.description}{"\n"}</Text>
                <Text style={styles.texttmp}>{props.temp} <Text style={styles.textc}>°C{"\n"}</Text> </Text>
            </View>
            
     
    );
}

const styles = StyleSheet.create({

    textbox: {
        alignItems: 'center',
    },
   
    textmn: {
        fontSize: 51,
        color: 'white',
    },

    textdes: {
        fontSize: 22,
        color: 'white',
    },
    
    texttmp: {
        fontSize: 51,
        color: 'white',
    },
    
    textc: {
        fontSize: 22,
        color: 'white',
    },
    
});