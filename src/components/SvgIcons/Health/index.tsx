import React from "react";
import Svg, { G, Path } from 'react-native-svg';

export function Health() {
    return (
        <Svg
            width={50}
            height={50}
            viewBox="0 0 64 64"
            fill="none"
            stroke="#27cc4e"
        >
            <G>
                <Path d="M32.1 26.3c-3.86-9.1-14.84-6.84-14.9 3.72-.05 5.8 3.17 8.8 14.93 16.92 10.69-7.18 14.94-11.19 14.9-16.99-.07-10.58-11.24-12.39-14.93-3.65z" />
                <Path d="M57.35 42.64A27.25 27.25 0 0 0 59.5 32c0-3.69-.72-7.26-2.15-10.64V6.76H42.8a27.17 27.17 0 0 0-10.68-2.18c-3.7 0-7.3.74-10.68 2.18H6.87v14.6A27.26 27.26 0 0 0 4.72 32c0 3.69.73 7.26 2.15 10.64v14.6h14.56a27.19 27.19 0 0 0 10.68 2.18c3.7 0 7.3-.74 10.68-2.18h14.57v-14.6zm-1.5-34.38v10.06a27.46 27.46 0 0 0-1.02-1.63l-.2-.29a27.28 27.28 0 0 0-1.19-1.59l-.4-.48a27.23 27.23 0 0 0-1.54-1.7 27.3 27.3 0 0 0-2.17-1.94 27.12 27.12 0 0 0-1.57-1.19l-.3-.21a27.75 27.75 0 0 0-1.65-1.03h10.04zm-47.48 0H18.4c-.56.32-1.1.67-1.64 1.03l-.3.21c-.55.38-1.07.78-1.58 1.19a27.33 27.33 0 0 0-2.17 1.94l-.02.01a27.11 27.11 0 0 0-1.92 2.17 26.9 26.9 0 0 0-1.19 1.6l-.2.28c-.36.53-.7 1.07-1.02 1.63V8.26zm0 47.48V45.68c.32.56.66 1.1 1.02 1.63l.2.28a27.14 27.14 0 0 0 1.58 2.08c.5.58 1 1.16 1.54 1.7a27.15 27.15 0 0 0 2.18 1.94c.51.41 1.03.81 1.58 1.19l.3.21c.53.36 1.08.71 1.64 1.03H8.37zm13.5.07A25.83 25.83 0 0 1 8.3 42.2 25.77 25.77 0 0 1 6.22 32c0-3.54.7-6.97 2.09-10.2A25.84 25.84 0 0 1 21.87 8.2 25.7 25.7 0 0 1 32.1 6.07c3.55 0 7 .71 10.24 2.11A25.84 25.84 0 0 1 55.92 21.8 25.77 25.77 0 0 1 58 32c0 3.54-.7 6.97-2.08 10.2a25.83 25.83 0 0 1-13.57 13.6 25.7 25.7 0 0 1-10.24 2.12 25.68 25.68 0 0 1-10.24-2.11zm33.98-.07H45.81c.57-.32 1.11-.67 1.65-1.03l.3-.21a27.52 27.52 0 0 0 1.57-1.18l.48-.4a27.7 27.7 0 0 0 1.7-1.54l.03-.04a27 27 0 0 0 1.9-2.15c.42-.52.81-1.04 1.19-1.59l.2-.29c.36-.53.7-1.07 1.02-1.63v10.06z" />
            </G>
        </Svg>
    )
}