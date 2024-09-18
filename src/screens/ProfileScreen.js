import { View, StyleSheet, Dimensions, ScrollView, Text } from "react-native"
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SingleBanner } from "../components/banners/single-banner/SingleBanner";
import { ScreenMenu } from "../components/screen-menu/ScreenMenu";
import { PersonalInfoIcon } from "../components/icons/PersonalInfoIcon";
import { VerificationIcon } from "../components/icons/VerificationIcon";
import { SecurityIcon } from "../components/icons/SecurityIcon";
import { NotificationIcon } from "../components/icons/NotificationIcon";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export function ProfileScreen ({...props}) {
    const insets = useSafeAreaInsets();
    return (
        <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={styles.ScrollView}
        >
        <View style={[styles.container, {paddingTop: insets.top + 66}]}>
            <View style={styles.screenBlock}>
                <Text style={styles.screenTitle}>Profile settings</Text>
                <SingleBanner/>
                <View style={styles.block}>
                    <Text style={styles.blockTitle}>Profile</Text>
                    <ScreenMenu navigateItem={[
                        {
                        icon: PersonalInfoIcon,
                        label: 'Personal Info',
                        action: () => {},
                        },
                        {
                        icon: VerificationIcon,
                        label: 'Verification',
                        action: () => {},
                        },
                        {
                        icon: SecurityIcon,
                        label: 'Security',
                        action: () => {},
                        },
                    ]}/>
                </View>
                <View style={styles.block}>
                    <Text style={styles.blockTitle}>App settings</Text>
                    <ScreenMenu navigateItem={[
                        {
                        icon: NotificationIcon,
                        label: 'Notification',
                        action: () => {},
                        switch: 'Off'
                        },
                    ]}/>
                </View>
            </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,
    },
    screenBlock: {
        gap: 16,
        paddingHorizontal: 12,
    },
    block: {
        gap: 8,
    },
    ScrollView: {
        backgroundColor: '#031329',
        marginHorizontal: 0,
    },
    screenTitle: {
        fontSize: 20,
        fontFamily: 'MontserratBold',
        color: '#FFFFFF',
    },
    blockTitle: {
        fontSize: 12,
        fontFamily: 'MontserratBold',
        color: '#FFFFFF44',
    }
})