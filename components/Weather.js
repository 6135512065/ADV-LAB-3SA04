import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native';
import Forecast from './Forecast';


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
                    console.log('json: ', json.weather)
                    // console.log(json.weather[0].main)
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp,
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
    }, [props.zipCode])


    return (
        <View>
            <ImageBackground source={require('./bg.jpg')} style={styles.backdrop}>
                <View style={styles.cover}>
                    <Text style={styles.medium}>Zip Code:  {props.zipCode}</Text>
                    <Text style={styles.medium}>Weather by Faruslan Waming 6135512065</Text>
                    <Forecast {...forecastInfo} />
                </View>
                <Image style={styles.sun}
                    source={require('./sun2.png')}>
                </Image>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
        fontWeight: "bold"
    },
    cover: {
        backgroundColor: 'black',
        width: '100%',
        height: 260,
        opacity: 0.3,
        alignItems: 'center',
        fontWeight: "bold"
    },
    medium: {
        marginTop: 32,
        fontSize: 15,
        color: 'white',
        fontWeight: "bold"
    },
    sun: {
        marginTop: 300,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
    }
});