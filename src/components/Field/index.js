import React from "react";
import {TextInput} from "react-native";
import defaultStyles from "./styles";

export default function Field({value, styles, changeField}) {
    const update = (newValue, callback) => {
        const checkInteger = newValue.match(/^[0-9]*$/);
        if(!checkInteger) return;
        const removeLeadingZero = newValue.replace(/^(0)(.+)/, '$2');
        callback(removeLeadingZero);
    }
    const numberString = String(value);
    return <TextInput
        style={[defaultStyles.field, styles]}
        keyboardType='number-pad'
        selectTextOnFocus
        onChangeText={(newValue) => {update(newValue, changeField)}}
        value={numberString}
    />
}