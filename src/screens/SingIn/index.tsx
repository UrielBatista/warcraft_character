import React, { useState } from "react";
import { View, Text, Alert } from 'react-native';

import { useNavigation } from "@react-navigation/native";

import { ButtonIcon } from "../../components/buttonicon";
import { VideoComponent } from '../../components/videoComponent';
import { GetAuthenticationToken } from "../../services/getAuthToken";
import { styles } from "./styles";

type TokenReponse = {
    access_token: string;
}

export function SingIn() {
    const navigation = useNavigation();
    async function handleSignIn() {
        const tokenDetails = GetAuthenticationToken();
        tokenDetails.then((props) => {
            const { access_token } = props.access_token as TokenReponse;
            navigation.navigate('Home' as never, { access_token: props.access_token } as never)
        }).catch(() => {
            Alert.alert('Invalid authorization');
        });
    }

    return (
        <View style={styles.container}>
            <VideoComponent />
            <Text style={styles.title}>
                Entre no Mundo {`\n`}
                de {`\n`}
                Warcraft
            </Text>

            <ButtonIcon title="Entrar" onPress={handleSignIn} />

        </View>
    )
}