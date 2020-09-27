import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, TouchableHighlight, StyleSheet, ImageBackground, TouchableOpacity, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/SimpleLineIcons";


const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]

const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight activeOpacity={0.6} onPress={() => navigation.navigate('Weather', { zipCode: code })}>

        <View style={styles.text}>
            <Text style={styles.textplace}>{place}</Text>
            <Text style={styles.textcode}>{code}</Text>
        </View>

    </TouchableHighlight>
  
)

const _keyExtractor = item => item.code

export default function ZipCodeScreen() {
    
    const navigation = useNavigation()
    return (
        <View style={styles.bg}>
            <ImageBackground source={require('../bg2.jpg')} style={styles.backdrop}>
                <FlatList 
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
                />
                <Icon style={styles.icon}
                    name="user-female"
                    color="white"
                    size={50}
                    onPress={() => navigation.navigate('About me')}>
                </Icon>
                <Text style={styles.textabout}>about me</Text>
                <StatusBar style={styles.tab} />
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
        opacity: 0.6,
    },
    textplace: {
        fontSize: 30,
        color: 'white',
    },
    textcode: {
        fontSize: 30,
        color: 'white',
    },
    text: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 38,
    },
    icon: {
        textAlign: 'center',
    },
    textabout: {
        fontSize: 20,
        color: 'white',
        margin: 15,
        textAlign: 'center',
    },
})
