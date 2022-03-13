import { StyleSheet } from "react-native";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingTop: 24
        
    },
    notRank: {
        marginTop: 20,
        height: 100,
        width: 100,
    },
    rankOne: {
        fontFamily: theme.fonts.title500,
        fontSize: 18,
        color: '#FFF',
        paddingHorizontal: 50,
        paddingTop: 20
    },
    typePvP: {
        fontFamily: theme.fonts.title700,
        fontSize: 22,
        color: '#f8b700',
        padding: 20,
        marginTop: 22,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#f8b700',
    },
    typePvP10x10: {
        fontFamily: theme.fonts.title700,
        fontSize: 22,
        color: '#f8b700',
        padding: 20,
        marginTop: 22,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#f8b700',
    },

});