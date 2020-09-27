import React, { useState , useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';
import Forecast from './Forecast';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

const apiKey = '6cecb9dd2e369d7e9b5d62bc682150d4'
var setIcon = "weather-cloudy"

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
                       if (json.weather[0].main == "Rain") {
                            setIcon = "weather-pouring"
                       }
                       else if (json.weather[0].main == "Clouds") {
                           setIcon = "weather-cloudy"
                       }
                       else if (json.weather[0].main == "Sun") {
                           setIcon = "weather-sunny"
                       }
                   })
                   .catch((error) => {
                       console.warn(error);
                   });
           }
       }, [props.zipCode])

       const date = moment().format('MMMM Do YYYY, h:mm a');
    return (
        <View>
            <ImageBackground source={require('../bg2.jpg')} style={styles.backdrop}>
                <View style={styles.bg}>
                    <Text style={styles.date}>{date}</Text>
                    <Text style={styles.font}><Icon name="location-pin" size={32} color="white" /> Zip code is {props.zipCode}.</Text>
                    <Icon2 style={styles.icon} name={setIcon} size={70}/>
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
        height: 455,
        opacity: 0.6,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 14,
    },
    font: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        padding: 20,
    },
    date: {
        textAlign: 'center',
        fontSize: 22,
        color: 'white',
        padding: 20,
    },
    icon: {
        textAlign: 'center',
        color: 'white',
    }
});