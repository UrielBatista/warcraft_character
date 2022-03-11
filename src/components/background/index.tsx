import React, { ReactNode } from "react";
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from "./styles";

type Props = {
    children: ReactNode
}

export function Background({ children }: Props){
    return(
        <LinearGradient style={styles.container} colors={['#170e09', 'black']}>
            {children}
        </LinearGradient>
    )
}