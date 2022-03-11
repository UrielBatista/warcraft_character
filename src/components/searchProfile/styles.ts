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
    divider: {
        marginRight: 4,
        fontSize: 15,
        fontFamily: theme.fonts.title400,
        color: '#FFF'
    },
})