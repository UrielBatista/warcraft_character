import { StyleSheet } from "react-native";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        width: '100%',
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: getStatusBarHeight() + 26,
        marginBottom: 42
    },

    sumary: {
        textAlign: 'center',
        paddingHorizontal: 24,
        width: '100%',
        fontFamily: theme.fonts.title400,
        paddingTop:20,
        paddingBottom:20,
        backgroundColor:'black',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#f8b700',
        color: '#f8b700'
    }
});