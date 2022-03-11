import React from "react";
import { View } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

import { styles } from "./styles";

export function VideoComponent(){
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    return(
        <View 
            style={styles.container} 
        >
            <Video
                ref={video}
                style={styles.backgroundVideo}
                source={require("../../assets/wow.mp4")}
                resizeMode="cover"
                shouldPlay
                isLooping
            />
        </View>
    )
}