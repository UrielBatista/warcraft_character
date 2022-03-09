import React from "react";
import { View, Text, Image, StatusBar } from 'react-native';

import { ButtonIcon } from "../../components/buttonicon";
import Landscape from '../../assets/landscape.png';


import { styles } from "./styles";

export function SingIn(){
    return(
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />

            <Image source={Landscape} style={styles.image} resizeMode="stretch"/>

            <Text style={styles.title}>
                Entre no Mundo {`\n`}
                    de {`\n`}
                  Warcraft
            </Text>

            <ButtonIcon/>
            
        </View>
    )
}