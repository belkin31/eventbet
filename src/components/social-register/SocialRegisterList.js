import { StyleSheet, View } from "react-native"
import { GoogleIcon } from "./GoogleIcon"
import { AppleIcon } from "./AppleIcon"
import { MetaMaskIcon } from "./MetaMaskIcon"
export function SocialRegisterList ({...props}) {

    return (
        <View style={styles.socialList}>
            <View style={styles.socialItem}>
                <GoogleIcon/>
            </View>
            <View style={styles.socialItem}>
                <AppleIcon/>
            </View>
            <View style={styles.socialItem}>
                <MetaMaskIcon/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    socialList: {
        flexDirection: 'row',
        gap: 4,
    },
    socialItem: {
        width: 32,
        height: 32,
        padding: 8,
        justifyContent: 'center',
        backgroundColor: '#00141F',
        borderRadius: 50,
        alignItems: 'center'
    }
})