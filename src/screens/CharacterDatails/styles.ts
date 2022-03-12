import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sumary: {
        textAlign: 'center',
        paddingHorizontal: 24,
        width: '100%',
        fontFamily: theme.fonts.title400,
        marginTop: 65,
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
    attributes1: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    life: {
        flexDirection: 'row',
        fontFamily: theme.fonts.title500,
        fontSize: 24,
        textAlign: 'center',
        color: '#FFF',
        marginRight: 185
    },
    vigor: {
        fontFamily: theme.fonts.title500,
        fontSize: 24,
        textAlign: 'center',
        color: '#FFF'
    },
    attributes2: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    critc: {
        flexDirection: 'row',
        fontFamily: theme.fonts.title500,
        textAlign: 'center',
        fontSize: 24,
        color: '#FFF',
        marginRight: 100
    },
    acceleration: {
        fontFamily: theme.fonts.title500,
        textAlign: 'center',
        fontSize: 24,
        color: '#FFF'
    },
    attributes3: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 100
    },
    maestry: {
        flexDirection: 'row',
        fontFamily: theme.fonts.title500,
        textAlign: 'center',
        fontSize: 24,
        color: '#FFF',
        marginRight: 100
    },
    versatility: {
        fontFamily: theme.fonts.title500,
        textAlign: 'center',
        fontSize: 24,
        color: '#FFF'
    }
});