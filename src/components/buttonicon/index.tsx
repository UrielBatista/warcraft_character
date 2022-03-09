import React from "react";
import { Text, Image, View, TouchableOpacity } from 'react-native';
import { styles } from "./styles";

export function ButtonIcon(){
    const onPress = () => alert("Entrando...");
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View>
                
            </View>
            <Text style={styles.title}>Entrar</Text>
        </TouchableOpacity>
    )
}