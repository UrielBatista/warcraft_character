import React, {useState} from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from 'react-native';

import { ButtonIcon } from "../../components/buttonicon";
// import Landscape from '../../assets/landscape.png';
import { VideoComponent } from '../../components/videoComponent';

import { styles } from "./styles";


type TokenReponse = {
    access_token: string;
}

export function SingIn() {
    const navigation = useNavigation();
    const [dataToken, setDataToken] = useState({})

    async function handleSignIn(){
        const CLIENT_ID = '60113aad7d1c422997d719069b192ef9'
        const CLIENT_SECRET = 'T4FoTKRQvz56fVYgzz06r2TMyVEuz7eC'
        const authUrl = `https://us.battle.net/oauth/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`
        
        const requestOptions = {
            method: 'POST',
        };
        fetch(authUrl, requestOptions)
            .then(response => response.json())
            .then(data => setDataToken(data.access_token)).catch(() => alert('Token ainda não validado!!'));
        
        const { access_token } = dataToken as TokenReponse;
        navigation.navigate('Home' as never, {access_token: dataToken} as never)
    }

    return (
        <View style={styles.container}>
            <VideoComponent/>
            <Text style={styles.title}>
                Entre no Mundo {`\n`}
                de {`\n`}
                Warcraft
            </Text>

            <ButtonIcon title="Entrar" onPress={handleSignIn}/>

        </View>
    )
}