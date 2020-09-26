import React, { useState , useEffect} from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';
import Forecast from './Forecast';
import moment from 'moment';

const apiKey = '6cecb9dd2e369d7e9b5d62bc682150d4'


export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
    })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {              
   
   fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=${apiKey}`)
                   .then((response) => response.json())
                   .then((json) => {
                       setForecastInfo({
                           main: json.weather[0].main,
                           description: json.weather[0].description,
                           temp: json.main.temp
                       });
                   })
                   .catch((error) => {
                       console.warn(error);
                   });
           }
       }, [props.zipCode])
       const date = moment().format('MMMM Do YYYY, h:mm a');
    return (
        <View>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
    
                <View style={styles.bg}>
                    {/* <Image source={require('../pin.png')} /> */}
                    <Text style={styles.date}>{date}</Text>
                    <Text style={styles.font}>Zip code is {props.zipCode}.</Text>
                    <Forecast {...forecastInfo} />
                    
                </View>
            
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    backdrop: {
        width: '100%',
        height: '100%',
    },
    bg: {
        backgroundColor: 'black',
        width: '100%',
        height: 320,
        opacity: 0.4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 30,
    },
    font: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        paddingTop: 30,
    },
    date: {
        textAlign: 'center',
        fontSize: 22,
        color: 'white',
        
    }
});