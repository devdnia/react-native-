import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';


interface Props {
    title: string;
    fontSize?: number;
}

export const HeaderTitle = ({ title, fontSize = 35}: Props) => {
    const { top } = useSafeAreaInsets();
    const { theme: { colors } } = useContext(ThemeContext);

    return (
        <View style={{ marginTop: top + 20, marginBottom: 20 }}>
            <Text style={{ 
                    fontSize,
                    color: colors.text
                }}>
                    {title}
            </Text>
        </View>
    )

}
