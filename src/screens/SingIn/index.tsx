import React, { useState } from "react";
import envs from '../../Config/env';

import { useNavigation } from "@react-navigation/native";
import { View, Text } from 'react-native';

import { ButtonIcon } from "../../components/buttonicon";
import { VideoComponent } from '../../components/videoComponent';

import { styles } from "./styles";

type TokenReponse = {
    access_token: string;
}

export function SingIn() {
    const { CLIENT_ID, CLIENT_SECRET, API_AUTH } = envs;
    const navigation = useNavigation();
    const [dataToken, setDataToken] = useState({})

    async function handleSignIn() {
        const authUrl = `${API_AUTH}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`

        const requestOptions = {
            method: 'POST',
        };
        await fetch(authUrl, requestOptions)
            .then(response => response.json())
            .then(data => {
                const { access_token } = data.access_token as TokenReponse;
                navigation.navigate('Home' as never, { access_token: data.access_token } as never)
            })
            .catch(() => alert('Token ainda não validado!!'));

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