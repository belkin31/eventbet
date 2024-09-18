import { View, StyleSheet, Text, Image } from "react-native"
export function SingleBanner({...props}) {
    return (
        <View style={styles.container}>
            <Text style={styles.bannerText}>You cannot play games without completing the Verification process.</Text>
            <Image style={styles.bannerImage} source={require('../../../../assets/img/banners/banner-profile.png')}/>
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0A2737',
        overflow: 'hidden',
        borderRadius: 8,
        flexDirection: 'row',
        position: 'relative',
    },
    bannerText: {
        color: '#FFFFFF',
        padding: 16,
        maxWidth: '60%',
        fontFamily: 'MontserratRegular',
        fontSize: 15,
    },
    bannerImage: {
        position: 'absolute',
        width: '50%',
        bottom: 0,
        top: 0,
        right: 0,
        height: '100%',
    }
})