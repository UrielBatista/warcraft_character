import React from "react";
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = {
    urlImage: string;
}

export function Avatar({ urlImage }: Props) {
    return (
        <LinearGradient
            style={styles.container}
            colors={['#FFF', 'black']}
        >
            <Image
                source={{uri: urlImage}}
                style={styles.avatar}
            />
        </LinearGradient>
    )
}