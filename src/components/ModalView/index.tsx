import React, { ReactNode } from 'react';
import {
    View,
    Modal,
    ModalProps,
    TouchableWithoutFeedback,
} from 'react-native';

import { styles } from './styles';

type Props = ModalProps & {
    children: ReactNode;
    closeModal: () => void;
}

export function ModalView({ children, closeModal, ...rest }: Props) {
    return (
        <Modal
            transparent
            animationType="slide"
            statusBarTranslucent
            {...rest}
        >
            <TouchableWithoutFeedback onPress={closeModal}>
                <View style={styles.overlay}>
                    <View style={styles.container}>
                            <View style={styles.bar} />
                            {children}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}