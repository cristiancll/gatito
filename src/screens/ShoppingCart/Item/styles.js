import {StyleSheet} from "react-native";
import {COLORS} from "../../../styles";

export default StyleSheet.create({
    information: {
        padding: 24,
    },
    name: {
        color: COLORS.orange,
        fontWeight: 'bold',
        fontSize: 16,
    },
    calculation: {
        color: COLORS.dark,
        fontSize: 14,
        marginVertical: 8,
    },
    price: {
        color: COLORS.purple,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'right',
    },
    divisor: {
        marginHorizontal: 24,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray,
    },
    shoppingCart: {
        paddingHorizontal: 24,
        paddingBottom: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    value: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        flexWrap: 'wrap',
    },
    description: {
        color: COLORS.dark,
        fontSize: 16,
        marginRight: 8,
    },
    amount: {
        width: 42,
    }
});