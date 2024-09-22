import { StyleSheet, View, Text, KeyboardAvoidingView, Pressable, Modal, Dimensions } from 'react-native';
import {useTranslation} from "react-i18next";
import { CrossIcon } from '../icons/CrossIcon';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';
import { DefaultInput } from '../forms/DefaultInput';
import { PhoneInput } from '../forms/PhoneInput';
import { PasswordInput } from '../forms/PasswordInput';
import { ShowPasswordIcon } from '../icons/ShowPasswordIcon';
import { DefaultCheckbox } from '../forms/DefaultCheckbox';
import { DefaultButton } from '../buttons/DefaultButton';

export function RegisterModal({closeModal, ...props}) {
    const {t} = useTranslation();
    const insets = useSafeAreaInsets();
    const HandleCloseModal = (event) => {
        closeModal(event)
    };

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.modalVisible}
            onRequestClose={() => {HandleCloseModal}}
        >
            <BlurView style={styles.modalView} intensity={4}>
                <KeyboardAvoidingView behavior='position'>
                    <View style={[styles.modalContain, {paddingBottom: 30 + insets.bottom}]}>
                        <View style={styles.modalHead}>
                            <Pressable style={styles.modalClose} onPress={HandleCloseModal}>
                                <CrossIcon/>
                            </Pressable>
                            <Text style={styles.modalTitle}>Sign Up</Text>
                        </View>
                        <View style={styles.modalBody}>
                            <DefaultInput placeholder={'Enter you Email'}/>
                            <PhoneInput code={'1'} placeholder={'Enter you Phone'}/>
                            <PasswordInput placeholder={'Password'}>
                                <ShowPasswordIcon/>
                            </PasswordInput>
                            <DefaultCheckbox/>
                            <DefaultButton size={'lg'}>
                                <Text style={styles.submitButtonText}>Ok</Text>
                            </DefaultButton>
                        </View>
                    </View>
                </KeyboardAvoidingView>
                
            </BlurView>
        </Modal>
    )
}

const styles =  StyleSheet.create({
    modalView: {
        height: 'auto',
        position: 'absolute',
        bottom: 0,
        justifyContent: 'flex-end',
        top: 0,
        backgroundColor: '#0A273762',
        width: Dimensions.get('window').width,
        padding: 8,
        paddingBottom: 0,
    },
    modalContain: {
        backgroundColor: '#2A3642',
        borderRadius: 8,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        padding: 16,
        gap: 16
    },
    submitButtonText: {
        fontFamily: 'MontserratBold',
        color: '#FFFFFF',
        fontSize: 12,
        alignItems: 'center'
    },
    modalHead: {
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalBody: {
        gap: 6,
    },
    modalTitle: {
        fontFamily: 'MontserratBold',
        color: '#FFFFFF',
        fontSize: 16,
    },
    modalClose: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        width: 20,
        backgroundColor: '#011C2D',
        height: 20,
        position: 'absolute',
        padding: 5,
        borderRadius: 18,
    }
})