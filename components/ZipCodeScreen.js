import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, TouchableHighlight, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]

const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight activeOpacity={0.2}  onPress={() => navigation.navigate('Weather', { zipCode: code })}>
        
            
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
        <View>
            <ImageBackground source={require('../bg2.jpg')} style={styles.backdrop}>
            <FlatList style = {styles.bg}
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
            />
            <StatusBar style= {styles.tab}/>
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
        paddingRight: 35,
        paddingLeft: 35,
        paddingTop: 80,
    }

  })
