import React, { useState } from "react";
import { View, Text, Alert } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import { GetCharacterMedia } from "../../services/getCharacterDetails";

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
    const [kingdom, setKingdom] = useState('Azralon');
    const [profile, setProfile] = useState('');

    const [imageBackgroud, setImageBackground] = useState('');
    const token = data.name;


    const handleSendInput = () => {
        const requestKingdom = kingdom.toLocaleLowerCase();
        const requestProfile = profile.toLocaleLowerCase();
        const characterMediaDetails = GetCharacterMedia(requestKingdom, requestProfile, data.name);

        characterMediaDetails.then((props) => {
            var imageBackgroud = ''
            if (!props.assets){
                const { value } = props.render_url as RequestCharacter;
                imageBackgroud = props.render_url;
            } else {
                const { value } = props.assets[2].value as RequestCharacter;
                imageBackgroud = props.assets[2].value;
            }
            const { access_token } = token as RequestCharacter;
            const { kingdom_character } = props.character.realm.slug as RequestCharacter
            const { profile_character } = props.character.name as RequestCharacter
            cleanInputs()
            navigation.navigate('CharacterDatails' as never, 
            { 
                value: imageBackgroud, 
                access_token: token,
                kingdom_character: props.character.realm.slug,
                profile_character: props.character.name
            } as never)
        }).catch(() => {
            Alert.alert('Dados enviados são inválidos!');
        });
    }

    const cleanInputs = () => {
        setKingdom('Azralon')
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
                
                <Picker
                    style={styles.piker}
                    selectedValue={kingdom}
                    onValueChange={(itemValue, itemIndex) => setKingdom(itemValue)}
                >
                    <Picker.Item label="Azralon" value="azralon" />
                    <Picker.Item label="Gallywix" value="gallywix" />
                    <Picker.Item label="Goldrinn" value="goldrinn" />
                    <Picker.Item label="Nemesis" value="nemesis" />
                    <Picker.Item label="Tol Barad" value="tol-barad" />
                    <Picker.Item label="Tichondrius" value="tichondrius" />
                </Picker>

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