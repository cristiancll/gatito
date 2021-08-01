import React from "react";
import {Text, TouchableOpacity} from "react-native";

import defaultStylesFunction from "./styles";

export default function CustomButton({value, action, styles, small = false, inverted = false}){
    const defaultStyles = defaultStylesFunction(small, inverted);
    
    return (
        <TouchableOpacity onPress={action} style={[defaultStyles.button, styles]}>
            <Text style={[defaultStyles.value, styles]}>{value}</Text>    
        </TouchableOpacity>
    )
}