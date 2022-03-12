import React, { useState } from "react";
import { View, Text, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { ImputData } from '../inputData'
import { ButtonIcon } from '../buttonicon'
import { styles } from "./styles";

type RequestCharacter = {
    value: string;
    access_token: string;
    kingdom_character: string;
    profile_character: string;
}

export function SearchProfile(data: any) {
    const navigation = useNavigation();
    const [kingdom, setKingdom] = useState('');
    const [profile, setProfile] = useState('');
    const token = data.name;


    const handleSendInput = () => {
        const NAMESPACE = 'profile-us'
        const LOCAL = 'en_US'
        const REGION = 'us'
        const requestKingdom = kingdom.toLocaleLowerCase();
        const requestProfile = profile.toLocaleLowerCase();
        const characterUrl = `https://us.api.blizzard.com/profile/wow/character/${requestKingdom}/${requestProfile}/character-media?namespace=${NAMESPACE}&locale=${LOCAL}&%3Aregion=${REGION}&access_token=${data.name}`
        
        fetch(characterUrl)
            .then(response => response.json())
            .then(data => {
                const { value } = data.assets[2].value as RequestCharacter;
                const { access_token } = token as RequestCharacter;
                const { kingdom_character } = data.character.realm.slug as RequestCharacter
                const { profile_character } = data.character.name as RequestCharacter
                cleanInputs();
                navigation.navigate('CharacterDatails' as never, 
                { 
                    value: data.assets[2].value, 
                    access_token: token,
                    kingdom_character: data.character.realm.slug,
                    profile_character: data.character.name
                } as never)

            })
            .catch(() => Alert.alert('Dados enviados são inválidos!'));
    }

    const cleanInputs = () => {
        setKingdom('')
        setProfile('')
    }

    function backToSignIn() {
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
                    value={kingdom}
                />
                <Text style={styles.divider}>
                    -
                </Text>
                <ImputData
                    maxLength={100}
                    placeholder="Personagem"
                    onChangeText={setProfile}
                    value={profile}
                />
            </View>

            <ButtonIcon title="Enviar" onPress={handleSendInput} />

            <ButtonIcon title="Log off" onPress={backToSignIn} />

        </View>
    );
}