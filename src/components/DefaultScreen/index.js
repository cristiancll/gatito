import React from "react";
import GlobalStyles, {COLORS} from "../../styles";
import {KeyboardAvoidingView, Platform, SafeAreaView, StatusBar} from "react-native";
import Styles from './styles';


export default function DefaultScreen({children}){
    return (
    <>
        <SafeAreaView style={Styles.adjustScreen}>
            <StatusBar backgroundColor={COLORS.purple}/>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? "padding" : "height"}
                style={GlobalStyles.fill}
            >
                {children}
            </KeyboardAvoidingView>
        </SafeAreaView>
        <SafeAreaView style={Styles.adjustScreenBottom}/>
    </>
);
}
