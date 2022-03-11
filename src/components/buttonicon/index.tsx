import React from "react";
import { Text, View } from 'react-native';
import { RectButton, RectButtonProps} from 'react-native-gesture-handler'
import { styles } from "./styles";


type Props = RectButtonProps & {
    title: string;
}

export function ButtonIcon({ title, ...rest }: Props) {
    return (
        <View style={styles.containerView}>
            <RectButton
                style={styles.container}
                {...rest}
            >
                <Text style={styles.title}>
                    {title}
                </Text>

            </RectButton>
        </View>
    )
}