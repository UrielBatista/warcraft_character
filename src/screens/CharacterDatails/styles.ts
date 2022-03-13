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
        marginTop: getStatusBarHeight() + 10,
        marginBottom: 1
    },
    svgComponent: {
        width: 200,
        height: 200,
        color: '#FFF'
    },
    sumary: {
        textAlign: 'center',
        paddingHorizontal: 24,
        width: '100%',
        fontFamily: theme.fonts.title400,
        marginTop: 20,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: 'black',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#f8b700',
        color: '#f8b700',
        marginBottom: 30
    },
    name: {
        fontFamily: theme.fonts.title500,
        fontSize: 24,
        color: '#FFF',
        marginBottom: 30
    },
    image: {
        borderColor: "#f8b700",
        borderWidth: 2,
        height: 260,
        width: 360,
        borderRadius: 100
    },
    touchableImage: {
        borderWidth: 2,
        height: 260,
        width: 365,
        borderRadius: 100
    },
    classCharacter: {
        marginTop: 10,
        fontFamily: theme.fonts.title400,
        fontSize: 18,
        color: '#FFF',
    },
    iconsAttributs: {
        flex: 1,
        paddingVertical: 20,
        marginRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    health: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 50,
    },
    textHealth: {
        fontFamily: theme.fonts.title500,
        fontSize: 18,
        color: '#FFF',
    },
    stamina: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
    },
    textStamina:{
        fontFamily: theme.fonts.title500,
        fontSize: 18,
        color: '#FFF',
    },
    critic: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        
    },
    textCritc:{
        fontFamily: theme.fonts.title500,
        fontSize: 18,
        color: '#FFF',
    },
    haste: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 45,
        marginLeft: 14,
        marginRight: -14
        
    },
    textHaste:{
        fontFamily: theme.fonts.title500,
        fontSize: 18,
        color: '#FFF',
    },
    maestry: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 45,
        marginLeft: 18,
        marginRight: -18
        
    },
    textMaestry:{
        fontFamily: theme.fonts.title500,
        fontSize: 18,
        color: '#FFF'
    },
    versatility: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        marginLeft: 8,
        marginRight: -8
        
    },
    textVersatility:{
        fontFamily: theme.fonts.title500,
        fontSize: 18,
        color: '#FFF'
    }
});