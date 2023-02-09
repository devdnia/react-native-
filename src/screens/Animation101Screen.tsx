import React from 'react'
import { Animated, Button, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { useAnimation } from '../hooks/useAnimation'
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';



export const Animation101Screen = () => {

    const { opacity, position, fadeIn, fadeOut, startMovingPosition } = useAnimation();
    const { theme:{ colors }} = useContext(ThemeContext);

    return (
        <View style={styles.container}>
            <Animated.View style={{
                ...styles.purpleBox,
                opacity,
                marginBottom: 20,
                transform: [{
                    translateY: position
                }]
            }}
            />

            <TouchableOpacity
                style={{
                    backgroundColor: colors.primary,
                    width:100,
                    height:50,
                    borderRadius: 5,
                    justifyContent:'center',
                    marginBottom: 20,
                }}
                onPress={() => {
                    fadeIn();
                    startMovingPosition(-100)
                }}
            >
                <Text style={{ 
                    color: colors.text,
                    fontSize: 20,
                    textAlign: 'center',
                }}
                >
                    Fade In
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    backgroundColor: colors.primary,
                    width:100,
                    height:50,
                    borderRadius: 5,
                    justifyContent:'center',
                }}
                onPress={ fadeOut}
            >
                <Text style={{ 
                    color: colors.text,
                    fontSize: 20,
                    textAlign: 'center',
                }}
                >
                    Fade Out
                </Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        width: 150,
        height: 150,
    }
});