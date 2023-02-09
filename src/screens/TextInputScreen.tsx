import React, { useContext, useState } from 'react'
import { StyleSheet, TextInput, View, KeyboardAvoidingView, Platform, ScrollView, Text } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme';
import { CustomSwitch } from '../components/CustomSwitch';
import { useForm } from '../hooks/useForm';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const TextInputScreen = () => {

    const { form, onChange, isSubscribed } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribed: false,
    })

    const { theme: { colors, dividerColor } } = useContext(ThemeContext);

    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView>
                <View style={styles.globalMargin}>
                    <HeaderTitle title='Text Inputs' />

                    <TextInput
                        style={{
                            ...stylesScreen.inputStyle,
                            borderColor: colors.text,
                            color: colors.text
                        }}
                        placeholder='name'
                        autoCorrect={false}
                        autoCapitalize='words'
                        onChangeText={(value) => onChange(value, 'name')}
                        placeholderTextColor={ dividerColor }
                    />


                    <TextInput
                        style={{
                            ...stylesScreen.inputStyle,
                            borderColor: colors.text,
                            color: colors.text
                        }}
                        placeholder='email'
                        autoCorrect={false}
                        autoCapitalize='none'
                        onChangeText={(value) => onChange(value, 'email')}
                        keyboardType='email-address'
                        placeholderTextColor={ dividerColor }
                    />
                    <View style={styles.switchRow}>
                        <Text style={styles.switchText}>Suscribirse</Text>
                        <CustomSwitch isOn={isSubscribed} onChange={(value) => onChange(value, 'isSubscribed')} />
                    </View>


                    <HeaderTitle title={JSON.stringify(form, null, 3)} fontSize={20} />
                    <HeaderTitle title={JSON.stringify(form, null, 3)} fontSize={20} />

                    <TextInput
                        style={{
                            ...stylesScreen.inputStyle,
                            borderColor: colors.text,
                            color: colors.text
                        }}
                        placeholder='phone'
                        onChangeText={(value) => onChange(value, 'phone')}
                        keyboardType='number-pad'
                        placeholderTextColor={ dividerColor }
                    />
                </View>


                <View style={{ height: 100 }} />

            </ScrollView>

        </KeyboardAvoidingView>

    )
}

const stylesScreen = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10,
    }
});
