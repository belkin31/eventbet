import { View, StyleSheet, Dimensions, SafeAreaView, Text } from "react-native"
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LogoIcon } from "../../icons/LogoIcon";
import { DefaultButton } from "../../buttons/DefaultButton";
import { PrimaryButton } from "../../buttons/PrimaryButton";
import { SearchIcon } from "../../icons/SearchIcon";
import {useTranslation} from "react-i18next";
import { BlurView } from 'expo-blur';
import EventBus from 'react-native-event-bus'

const windowWidth = Dimensions.get('window').width;

export function TopBar({...props}) {
    const {t} = useTranslation()
    const insets = useSafeAreaInsets();
    const HandlePressSign = (event) => {
        console.log('press')
        EventBus.getInstance().fireEvent("open-register-modal")
    }
    const HandlePressSearch = (event) => {
        //
    }
    return (
        <SafeAreaView style={[styles.topBarWrapper, {top: insets.top + 8}]}>
            
            <View style={styles.container}>
            <BlurView intensity={100} style={styles.blurView}>
                    <View style={styles.logoContain}>
                        <LogoIcon/>
                    </View>
                    <View style={styles.userContain}>
                        <DefaultButton onPress={HandlePressSign}>
                            <Text style={styles.buttonText}>
                                {t('signIn')}
                            </Text>
                        </DefaultButton>
                        <PrimaryButton onPress={HandlePressSearch}>
                            <View style={styles.iconContain}>
                                <SearchIcon/>
                            </View>
                        </PrimaryButton>
                    </View>
            </BlurView> 
            
            </View>
        </SafeAreaView>        
    )
}

const styles = StyleSheet.create({
    topBarWrapper: {
        position: 'absolute',
        left: 12,
        right: 12,
    },
    blurView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
        alignItems: 'center'
    },
    container: {
        height: 42,
        backgroundColor: '#011C2D70',
        overflow: 'hidden',
        borderRadius: 8,
    },
    logoContain: {
        width: 94,
        height: 19,
        paddingHorizontal: 8,
    },
    iconContain: {
        width: 12,
        height: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'MontserratBold',
        color: '#FFFFFF',
        fontSize: 10,
        lineHeight: 16,
    },
    userContain: {
        flexDirection: 'row',
        gap: 8,
    }
})