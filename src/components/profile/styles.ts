import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatarTouchable: {
        width: 57,
        height: 50,
        borderRadius: 100
    },
    user: {
        flexDirection: 'row',

    },

    greeting: {
        fontFamily: theme.fonts.title500,
        fontSize: 24,
        color: '#FFF',
        marginRight: 6
    },

    username: {
        fontFamily: theme.fonts.title700,
        fontSize: 24,
        color: '#FFF'
    }
})