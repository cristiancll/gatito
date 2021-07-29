import { StyleSheet } from 'react-native';
import {COLORS} from "../../../styles";

export default (small, inverted) => StyleSheet.create({
    button: {
        width: 140,
        paddingVertical: small ? 3 : 9,
        paddingHorizontal: 20,
        backgroundColor: inverted ? COLORS.orange : COLORS.purple,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    value: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: inverted ? COLORS.purple : COLORS.orange,
    }
});