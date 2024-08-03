import { View, Image, StyleSheet } from "react-native"
export function GameCard({...props}) {
    return (
        <View style={styles.gameCard}>
            <Image style={styles.image} source={require('../../../assets/img/cover/5-Lions-Megaways 2.png')}/>
        </View>
    )
}
const styles = StyleSheet.create({
    gameCard: {
    },
    image: {
        width: 115,
        height: 153,
        borderRadius: 8,
    }
});