import { View, StyleSheet, Dimensions, SafeAreaView, Text } from "react-native"
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LogoIcon } from "../../icons/LogoIcon";
import { ProfileIcon } from "../../icons/ProfileIcon";
import { DefaultButton } from "../../buttons/DefaultButton";
import { PrimaryButton } from "../../buttons/PrimaryButton";
import { SearchIcon } from "../../icons/SearchIcon";
import {useTranslation} from "react-i18next";
//import { BlurView } from 'expo-blur';
import EventBus from 'react-native-event-bus'

const windowWidth = Dimensions.get('window').width;

export function TopBar({...props}) {
    const {t} = useTranslation()
    const insets = useSafeAreaInsets();
    const HandlePressSign = (event) => {
        EventBus.getInstance().fireEvent("open-register-modal")
    }
    const HandlePressSearch = (event) => {
        //
    }
    return (
        <SafeAreaView style={[styles.topBarWrapper, {top: insets.top + 8}]}>

            <View style={styles.container}>
            <View 
                style={styles.blurView} 
            >
                    <View style={styles.logoContain}>
                        <LogoIcon/>
                    </View>
                    <View style={styles.userContain}>
                        <View>
                            <DefaultButton onPress={HandlePressSign}>
                                <Text style={styles.buttonText}>
                                    324.2$
                                </Text>
                            </DefaultButton>
                        </View>
                        <View style={styles.buttonContain}>
                            <PrimaryButton onPress={HandlePressSearch}>
                                <View style={styles.iconContain}>
                                    <ProfileIcon/>
                                </View>
                            </PrimaryButton>
                            <View style={styles.counter}>
                                <Text style={styles.counterText}>2</Text>
                            </View>
                        </View>
                        <View>
                            <PrimaryButton onPress={HandlePressSearch}>
                                <View style={styles.iconContain}>
                                    <SearchIcon/>
                                </View>
                            </PrimaryButton>
                        </View>
                        
                    </View>
            </View> 
            
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
        overflow: 'hidden',
        alignItems: 'center'
    },
    container: {
        height: 42,
        backgroundColor: '#011C2D',
        overflow: 'hidden',
        borderRadius: 8,
    },
    buttonContain: {
        position: 'relative',
        height: 32,
    },
    counter: {
        position: 'absolute',
        width: 11,
        height: 11,
        backgroundColor: '#25E39A',
        top: -1,
        borderRadius: 11,
        right: -1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 4,
    },
    counterText: {
        fontFamily: 'MontserratBold',
        fontSize: 7,
        color: '#FFFFFF',
    },
    logoContain: {
        width: 94,
        height: 19,
        paddingHorizontal: 8,
    },
    iconContain: {
        width: 16,
        height: 16,
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
