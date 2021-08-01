import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles';

export default StyleSheet.create({
    content: {
        backgroundColor: COLORS.purple,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: 24,
    },
    total: {
        alignItems: 'center',
    },
    description: {
        fontSize: 16,
        color: COLORS.light,
        fontWeight: 'bold',
    },
    value: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 6,
        color: COLORS.orange,
    },
    button: {
        flexGrow: 1,
        alignItems: 'flex-end',
    },
});