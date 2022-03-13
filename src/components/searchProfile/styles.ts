import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        fontSize: 18,
        textAlign: 'center',
        fontFamily: theme.fonts.title400,
        color: '#f8b700',
        marginTop: 100
    },
    column: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 100
    },
    piker: {
        width: 150,
        height: 48,
        backgroundColor: 'black',
        color: '#FFF',
        borderRadius: 8,
        fontFamily: theme.fonts.title400,
        fontSize: 13,
        marginRight: 4,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#f8b700'
    },
    divider: {
        marginRight: 4,
        fontSize: 15,
        fontFamily: theme.fonts.title400,
        color: '#FFF'
    },
})