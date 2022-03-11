import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#170e09',
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        color: '#f8b700',
        textAlign: 'center',
        height: 200,
        fontSize: 40,
        fontFamily: theme.fonts.title700,
        marginBottom: 16
    },

    image: {
        height: 360
    }
})