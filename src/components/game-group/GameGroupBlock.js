import { View, StyleSheet, Text, ScrollView } from "react-native"
import { StarIcon } from "../icons/StarIcon"
import { GameCard } from "../game-card/GameCard"
import { SearchBar } from "../search-bar/SearchBar"
export function GameGroupBlock({...props}) {
    return (
        <View style={styles.gameGroupBlock}>
            <View style={styles.title}>
                <View style={styles.iconBadge}>
                    <View style={styles.iconContainer}>
                        <StarIcon/>
                    </View>
                </View>
                <Text style={styles.titleText}>New Games</Text>
            </View>
            {props?.searchIsShow && 
                <SearchBar/>
            }
            <ScrollView 
                style={styles.scrollView}
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.gameScroll}>
                    <GameCard cover={require('../../../assets/img/cover/5-Lions-Megaways 2.png')}/>
                    <GameCard cover={require('../../../assets/img/cover/Drago-Jewels-of-fortune.png')}/>
                    <GameCard cover={require('../../../assets/img/cover/Extra-Juıcy.png')}/>
                    <GameCard cover={require('../../../assets/img/cover/Barn-Festival 2.png')}/>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    gameGroupBlock: {
        gap: 8
    },
    title: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center'
    },
    titleText: {
        fontFamily: 'MontserratBold',
        fontSize: 10,
        color: '#FFFFFF'
    },
    iconContainer: {
     width: 9,
     height: 9
    },
    iconBadge: {
        padding: 5,
        backgroundColor: '#25E39A',
        borderRadius: 8,
    },
    scrollView: {
    },
    gameScroll: {
        gap: 8,
        display: 'flex',
        flexDirection: 'row'
    }
})