import React, { useEffect, useState } from "react";
import envs from '../../Config/env';

import { View, Text, Image, Alert } from "react-native";
import { Background } from "../../components/background";
import { GetRanked2x2, GetRanked3x3 } from '../../services/getPvPdata';

import { styles } from "./styles";


export function AchivmentsPvP(props: any) {
    const { LOW_CR, COMBATENT, DESAFIANT, RIVAL, DUELIST, GLADIATOR } = envs;

    const [rankx2, setRankx2] = useState(Number);
    const [rankx3, setRankx3] = useState(Number);

    const [insigniax2, setInsigniax2] = useState('');
    const [insigniax3, setInsigniax3] = useState('');

    useEffect(() => {
        
        const ranked2X2 = GetRanked2x2(props);
        ranked2X2.then((props) => {
            setRankx2(props.rating);
            chackInsigniax2(props.rating);
        }).catch(() => {
            setRankx2(0);
            chackInsigniax2(0);
        });

        const ranked3X3 = GetRanked3x3(props);
        ranked3X3.then((props) => {
            setRankx3(props.rating);
            chackInsigniax3(props.rating);
        }).catch(() => {
            setRankx3(0);
            chackInsigniax3(0);
        });
    });

    function chackInsigniax2(rank: number) {
        if (rank <= 1399) {
            setInsigniax2(LOW_CR)
        }
        else if (rank >= 1400 && rank <= 1600) {
            setInsigniax2(COMBATENT)
        }
        else if (rank >= 1600 && rank <= 1800) {
            setInsigniax2(DESAFIANT)
        }
        else if (rank >= 1800 && rank <= 2100) {
            setInsigniax2(RIVAL)
        }
        else if (rank >= 2100 && rank <= 2400) {
            setInsigniax2(DUELIST)
        }
        else if (rank > 2400) {
            setInsigniax2(GLADIATOR)
        }
    }

    function chackInsigniax3(rank: number) {
        if (rank <= 1399) {
            setInsigniax3(LOW_CR)
        }
        else if (rank >= 1400 && rank <= 1600) {
            setInsigniax3(COMBATENT)
        }
        else if (rank >= 1600 && rank <= 1800) {
            setInsigniax3(DESAFIANT)
        }
        else if (rank >= 1800 && rank <= 2100) {
            setInsigniax3(RIVAL)
        }
        else if (rank >= 2100 && rank <= 2400) {
            setInsigniax3(DUELIST)
        }
        else if (rank > 2400) {
            setInsigniax3(GLADIATOR)
        }
    }

    return (
        <Background>
            <Text style={styles.typePvP}>
                2x2
            </Text>
            <View style={styles.container}>
                <Image
                    style={styles.imageRank}
                    source={{ uri: insigniax2 !== "" ? insigniax2 : undefined }}

                />
                <Text style={styles.rank}>
                    {rankx2}
                </Text>
            </View>
            <Text style={styles.typePvP}>
                3x3
            </Text>
            <View style={styles.container}>
                <Image
                    style={styles.imageRank}
                    source={{ uri: insigniax3 !== "" ? insigniax3 : undefined }}

                />
                <Text style={styles.rank}>
                    {rankx3}
                </Text>
            </View>
        </Background>
    )
}