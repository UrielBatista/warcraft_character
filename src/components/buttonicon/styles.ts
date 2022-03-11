import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '75%',
        height: 56,
        backgroundColor: '#EA0003',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },

    containerView: {
        height: 100
    },

    title: {
        flex: 1,
        color: '#f8b700',
        fontSize: 20,
        fontFamily: theme.fonts.title700,
        textAlign: 'center',
    }
});