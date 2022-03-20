import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Image, Alert, TouchableHighlight, KeyboardAvoidingView } from 'react-native';
import { useRoute } from "@react-navigation/native";

import { Background } from "../../components/background";
import { ButtonIcon } from "../../components/buttonicon";
import { Load } from "../../components/Load";
import { Health } from "../../components/SvgIcons/Health";
import { Stamina } from "../../components/SvgIcons/Stamina";
import { CriticStrike } from "../../components/SvgIcons/CriticStrik";
import { Haste } from "../../components/SvgIcons/Haste";
import { Maestry } from "../../components/SvgIcons/Maestry";
import { Versatility } from "../../components/SvgIcons/Versatility";
import { GetAttributesDetailsCharacter, GetClassCharacterSpec } from "../../services/getCharacterDetails";

import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { BorderlessButton } from "react-native-gesture-handler";
import { ModalView } from "../../components/ModalView";
import { AchivmentsPvP } from "../AchivmentsPvP";


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

    const [health, setHealth] = useState();
    const [stamina, setStamina] = useState();
    const [critic, setCritic] = useState(Number);
    const [haste, setHaste] = useState(Number);
    const [maestry, setMaestry] = useState(Number);
    const [versatility, setVersatility] = useState(Number);

    const [classCharacter, setClassCharacter] = useState('')
    const [specCharacter, setSpecCharacter] = useState('')

    const [openModalView, setOpenModalView] = useState(false);
    const [rendenizeClassCharacterSpec, setRendenizeClassCharacterSpec] = useState(true)

    const kingdom = kingdom_character
    const profile = profile_character.toLocaleLowerCase();
    const imageCharacter = value;

    useEffect(() => {
        const attributesCharacterDetails = GetAttributesDetailsCharacter(kingdom, profile, access_token);
        attributesCharacterDetails.then((props) => {
            const dataCritc = Math.round(props.melee_crit.value);
            const dataHaste = Math.round(props.melee_haste.value);
            const dataMaestry = Math.round(props.mastery.value);
            const dataVersartility = Math.round(props.versatility_damage_done_bonus);

            setHealth(props.health);
            setStamina(props.stamina.effective);
            setCritic(dataCritc);
            setHaste(dataHaste);
            setMaestry(dataMaestry);
            setVersatility(dataVersartility);
            setLoading(false);

        }).catch(() => {
            Alert.alert('Dados não carregados!')
        });
    });

    function handleClickImage() {
        const classCharacterSpec = GetClassCharacterSpec(kingdom, profile, access_token);
        classCharacterSpec.then((props) => {
            setClassCharacter(props.playable_class.name);
            props.active_spec == undefined ? setSpecCharacter("Undefined") : setSpecCharacter(props.active_spec.name);
            rendenizeClassCharacterSpec == true ? setRendenizeClassCharacterSpec(false) : setRendenizeClassCharacterSpec(true);
        }).catch(() => {
            console.log('Nothing data!!');
        });
    }

    function handleOpenModalView() {
        setOpenModalView(true);
    }

    function handleCloseModalView() {
        setOpenModalView(false);
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

                        <Text style={styles.name}>
                            {profile_character}
                        </Text>

                        <TouchableHighlight style={styles.touchableImage} onPress={handleClickImage}>
                            <Image
                                source={{ uri: imageCharacter }}
                                style={styles.image}
                            />
                        </TouchableHighlight>

                        {/* Hidden and notHidden text element with boolean */}
                        {rendenizeClassCharacterSpec ?
                            <Text style={styles.classCharacter}></Text> :
                            <Text style={styles.classCharacter}>
                                {classCharacter} - {specCharacter}
                            </Text>
                        }

                        <View style={styles.iconsAttributs}>
                            <View style={styles.health}>
                                <Health />
                                <View style={{ marginBottom: 20, }}>
                                    <Text style={styles.textHealth}>
                                        Health {'\n'}
                                        {health}
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.stamina}>
                                <Stamina />
                                <View style={{ marginBottom: 20 }}>
                                    <Text style={styles.textStamina}>
                                        Stamina {'\n'}
                                        {stamina}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.iconsAttributs}>
                            <View style={styles.critic}>
                                <CriticStrike />
                                <View style={{ marginBottom: 20, }}>
                                    <Text style={styles.textCritc}>
                                        Critic {'\n'}
                                        {critic}%
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.haste}>
                                <Haste />
                                <View style={{ marginBottom: 20 }}>
                                    <Text style={styles.textHaste}>
                                        Haste {'\n'}
                                        {haste}%
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.iconsAttributs}>
                            <View style={styles.maestry}>
                                <Maestry />
                                <View style={{ marginBottom: 20, }}>
                                    <Text style={styles.textMaestry}>
                                        Maestry {'\n'}
                                        {maestry}%
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.versatility}>
                                <Versatility />
                                <View style={{ marginBottom: 20 }}>
                                    <Text style={styles.textVersatility}>
                                        Versatility {'\n'}
                                        {versatility}%
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <ButtonIcon title="PvP Ranking" onPress={handleOpenModalView} />
                        <ModalView visible={openModalView} closeModal={handleCloseModalView}>
                            <AchivmentsPvP kingdom={kingdom} profile={profile} access_token={access_token} />
                        </ModalView>

                    </View>
                }
            </ScrollView>
        </Background>
    );
}