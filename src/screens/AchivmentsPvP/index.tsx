import React, { useEffect, useState } from "react";
import { View, Text, Image, Alert } from "react-native";
import { Background } from "../../components/background";

import typeInsignia from "./typesInsignia";

import { styles } from "./styles";


export function AchivmentsPvP(props: any) {
    const [rankx2, setRankx2] = useState(Number);
    const [rankx3, setRankx3] = useState(Number);

    const [insigniax2, setInsigniax2] = useState('');
    const [insigniax3, setInsigniax3] = useState('');

    useEffect(() => {
        const NAMESPACE = 'profile-us'
        const LOCAL = 'en_US'
        const REGION = 'us'
        const pvp2x2Url = `https://us.api.blizzard.com/profile/wow/character/${props.kingdom}/${props.profile}/pvp-bracket/2v2?namespace=profile-us&locale=en_US&access_token=${props.access_token}`
        const pvp3x3Url = `https://us.api.blizzard.com/profile/wow/character/${props.kingdom}/${props.profile}/pvp-bracket/3v3?namespace=profile-us&locale=en_US&access_token=${props.access_token}`

        fetch(pvp2x2Url)
            .then(response => response.json())
            .then(data => {
                if (data.code == 404){
                    setRankx2(0);
                    chackInsigniax2(0)
                }else {
                    setRankx2(data.rating);
                    chackInsigniax2(data.rating)
                }
            })
            .catch(() => Alert.alert('Dados não carregados!'));

        fetch(pvp3x3Url)
            .then(response => response.json())
            .then(data => {
                if (data.code == 404){
                    setRankx3(0);
                    chackInsigniax3(0)
                }else {
                    setRankx3(data.rating);
                    chackInsigniax3(data.rating)
                }
            })
            .catch(() => Alert.alert('Dados não carregados!'));
    });

    function chackInsigniax2(rank: number){
        if (rank <= 1399){
            setInsigniax2('https://bnetcmsus-a.akamaihd.net/cms/template_resource/RJ6XE5WS8D6G1528483047503.png')
        }
        else if (rank >= 1400 && rank <= 1600){
            setInsigniax2('https://media.mmo-champion.com/images/news/2018/may/UI_RankedPvP_02.png')
        }
        else if (rank >= 1600 && rank <= 1800){
            setInsigniax2('https://bnetcmsus-a.akamaihd.net/cms/template_resource/Q4TDZMWJS1DC1528483047584.png')
        }
        else if (rank >= 1800 && rank <= 2100){
            setInsigniax2('https://media.mmo-champion.com/images/news/2018/may/UI_RankedPvP_04.png')
        }
        else if (rank >= 2100 && rank <= 2400){
            setInsigniax2('https://bnetcmsus-a.akamaihd.net/cms/template_resource/9WPOSOBTK7GY1528483047820.png')
        }
        else if (rank > 2400){
            setInsigniax2('https://www.wowchakra.com/wp-content/uploads/gallery/BFA_Ranked_PvP/UI_RankedPvP_07.png')
        }
    }

    function chackInsigniax3(rank: number){
        if (rank <= 1399){
            setInsigniax3('https://bnetcmsus-a.akamaihd.net/cms/template_resource/RJ6XE5WS8D6G1528483047503.png')
        }
        else if (rank >= 1400 && rank <= 1600){
            setInsigniax3('https://media.mmo-champion.com/images/news/2018/may/UI_RankedPvP_02.png')
        }
        else if (rank >= 1600 && rank <= 1800){
            setInsigniax3('https://bnetcmsus-a.akamaihd.net/cms/template_resource/Q4TDZMWJS1DC1528483047584.png')
        }
        else if (rank >= 1800 && rank <= 2100){
            setInsigniax3('https://media.mmo-champion.com/images/news/2018/may/UI_RankedPvP_04.png')
        }
        else if (rank >= 2100 && rank <= 2400){
            setInsigniax3('https://bnetcmsus-a.akamaihd.net/cms/template_resource/9WPOSOBTK7GY1528483047820.png')
        }
        else if (rank > 2400){
            setInsigniax3('https://www.wowchakra.com/wp-content/uploads/gallery/BFA_Ranked_PvP/UI_RankedPvP_07.png')
        }
    }

    return (
        <Background>
            <View style={styles.container}>
                <Image
                    style={styles.notRank}
                    source={{uri: insigniax2 !=="" ? insigniax2 : undefined }}

                />
                <Text style={styles.rankOne}>
                    {rankx2}
                </Text>
                <Text style={styles.typePvP}>
                    2x2
                </Text>
            </View>
            <View style={styles.container}>
                <Image
                    style={styles.notRank}
                    source={{ uri: insigniax3 !=="" ? insigniax3 : undefined }}

                />
                <Text style={styles.rankOne}>
                    {rankx3}
                </Text>
                <Text style={styles.typePvP}>
                    3x3
                </Text>

            </View>
        </Background>
    )
}