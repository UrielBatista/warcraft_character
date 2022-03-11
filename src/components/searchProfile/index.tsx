import React, { useState } from "react";
import { View, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { ImputData } from '../inputData'
import { ButtonIcon } from '../buttonicon'
import { styles } from "./styles";


export function SearchProfile(data: any){
    const navigation = useNavigation();
    const [kingdom, setKingdom] = useState('');
    const [profile, setProfile] = useState('');
    

    function handleSendInput(){
        console.log(data.name)

        const NAMESPACE = 'profile-us'
        const LOCAL = 'en_US'
        const REGION = 'us'
        const characterUrl = `https://us.api.blizzard.com/profile/wow/character/${kingdom}/${profile}/character-media?namespace=${NAMESPACE}&locale=${LOCAL}&%3Aregion=${REGION}&access_token=${data.name}`
        
        fetch(characterUrl)
        .then(response => response.json())
        .then(data => console.log(data)).catch(() => alert('Campo indo vazio, redigite o reino e personagem'));
        setKingdom('')
        setProfile('')
        
    }

    function backToSignIn(){
        navigation.navigate('SingIn' as never); 
    } 

    return (
        <View style={styles.container}>
            <Text style={[styles.label, { marginBottom: 12 }]}>
                Reino e Personagem
            </Text>

            <View style={styles.column}>
                <ImputData
                    maxLength={100}
                    placeholder="Reino"
                    onChangeText={setKingdom}
                />
                <Text style={styles.divider}>
                    -
                </Text>
                <ImputData
                    maxLength={100}
                    placeholder="Personagem"
                    onChangeText={setProfile}
                />
            </View>

            <ButtonIcon title="Enviar" onPress={handleSendInput} />
            
            <ButtonIcon title="Log off" onPress={backToSignIn} />

        </View>
    );
}