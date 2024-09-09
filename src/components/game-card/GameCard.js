import { View, Image, StyleSheet } from "react-native"
export function GameCard({...props}) {
    return (
        <View style={styles.gameCard}>
            <Image style={styles.image} source={props?.cover}/>
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