import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Image, Alert, TouchableHighlight } from 'react-native';
import { useRoute } from "@react-navigation/native";

import { Background } from "../../components/background";
import { ButtonIcon } from "../../components/buttonicon";
import { Load } from "../../components/Load";
import { Health } from "../../components/SvgIcons/Health";

import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { BorderlessButton } from "react-native-gesture-handler";
import { Stamina } from "../../components/SvgIcons/Stamina";
import { CriticStrike } from "../../components/SvgIcons/CriticStrik";
import { Haste } from "../../components/SvgIcons/Haste";
import { Maestry } from "../../components/SvgIcons/Maestry";
import { Versatility } from "../../components/SvgIcons/Versatility";

type ParamsToBackHome = {
    value: string
    access_token: string
    kingdom_character: string
    profile_character: string
}

export function CharacterDatails() {
    const [loading, setLoading] = useState(true);

    const navigation = useNavigation();
    const route = useRoute();
    const { value, access_token, kingdom_character, profile_character } = route.params as ParamsToBackHome

    const [life, setLife] = useState();
    const [stamina, setStamina] = useState();
    const [critic, setCritic] = useState();
    const [haste, setHaste] = useState();
    const [maestry, setMaestry] = useState();
    const [versatility, setVersatility] = useState();



    const kingdom = kingdom_character
    const profile = profile_character.toLocaleLowerCase();
    const imageCharacter = value;

    useEffect(() => {

        const NAMESPACE = 'profile-us'
        const LOCAL = 'en_US'
        const REGION = 'us'
        const characterUrl = `https://us.api.blizzard.com/profile/wow/character/${kingdom}/${profile}/statistics?namespace=${NAMESPACE}&locale=${LOCAL}&access_token=${access_token}`

        fetch(characterUrl)
            .then(response => response.json())
            .then(data => {
                setLife(data.health);
                setStamina(data.stamina.effective);
                setCritic(data.melee_crit.value);
                setHaste(data.melee_haste.value);
                setMaestry(data.mastery.value);
                setVersatility(data.versatility_damage_done_bonus);
                setLoading(false)
            })
            .catch(() => Alert.alert('Dados não carregados!'));
    });

    function handleClickImage() {
        Alert.alert('Clicked in image!!');
    }

    function handleBack() {
        navigation.navigate('Home' as never, { access_token: access_token } as never)
    }

    return (
        <Background>
            <ScrollView>
                {loading ? <Load /> :

                    <View style={styles.container}>


                        <View style={styles.header}>
                            <BorderlessButton onPress={handleBack}>
                                <Feather
                                    name="arrow-left"
                                    size={24}
                                    color={'#FFF'}
                                />
                            </BorderlessButton>
                        </View>
                        <Text style={styles.sumary}>
                            E aqui está as informações do personagem.
                        </Text>

                        {/* Iterar no JSON em que retorna do personagem pesquisado */}
                        <Text style={styles.name}>
                            {profile_character}
                        </Text>
                        <TouchableHighlight style={styles.touchableImage} onPress={handleClickImage}>
                            <Image
                                source={{ uri: imageCharacter }}
                                style={styles.image}
                            />
                        </TouchableHighlight>

                        <Text style={styles.classCharacter}>
                            Rogue - Subtlety
                        </Text>

                        <View style={styles.attributes1}>
                            <Health />
                            <Text style={styles.life}>
                                Health {'\n'}
                                {life}
                            </Text>
                            <Stamina/>
                            <Text style={styles.vigor}>
                                Stamina {'\n'}
                                {stamina}
                            </Text>
                        </View>

                        <View style={styles.attributes2}>
                            <CriticStrike/>
                            <Text style={styles.critc}>
                                Critc {'\n'}
                                {critic}
                            </Text>
                            <Haste/>
                            <Text style={styles.acceleration}>
                                Haste {'\n'}
                                {haste}
                            </Text>
                        </View>

                        <View style={styles.attributes3}>
                            <Maestry/>
                            <Text style={styles.maestry}>
                                Maestry {'\n'}
                                {maestry}
                            </Text>
                            <Versatility/>
                            <Text style={styles.versatility}>
                                Versatility {'\n'}
                                {versatility}
                            </Text>
                        </View>

                        <ButtonIcon title="PvP Ranking" />
                        {/* <ButtonIcon title="Back" onPress={handleBack} /> */}

                    </View>

                }
            </ScrollView>
        </Background>
    );
}