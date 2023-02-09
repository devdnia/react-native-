import React from 'react'
import { useContext } from 'react';
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { ThemeContext } from '../context/themeContext/ThemeContext'
import { MenuItem } from '../interfaces/appInterface'



interface Props {
    menuItem: MenuItem
}

export const FlatListMenuItem = ({ menuItem }: Props) => {

    const { name, icon, component } = menuItem;
    const navigation = useNavigation();

    const { theme: { colors } } = useContext( ThemeContext );


    return (

        <TouchableOpacity 
            activeOpacity={0.7}
            // Pongo como never para corregir el warning
            onPress={ () => navigation.navigate( component as never ) }
        >
            <View style={styles.container}>
                <Icon
                    name={icon}
                    color={ colors.primary }
                    size={23}
                />
                <Text style={{
                    ...styles.itemText,
                    color: colors.text
                    }}
                >

                    {name}
                </Text>

                <View style={{ flex: 1 }} />
                <Icon
                    name="chevron-forward-outline"
                    color={ colors.primary }
                    size={23}
                />
            </View>
        </TouchableOpacity>
    )

}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    itemText: {
        marginLeft: 5,
        fontSize: 19,
    },
});