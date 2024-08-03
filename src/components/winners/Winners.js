import { StyleSheet, View, Text, Pressable, ScrollView, FlatList } from "react-native"
import { WinnersItem } from "./WinnersItem";
import { BitcoinIcon } from "../icons/currency/BitcoinIcon"
import { useState } from 'react';

export function Winners ({...props}) {
    const [winners, setWinners] = useState([
        {
            game: {
                image: require('../../../assets/img/cover/5-Lions-Megaways 2.png'),
                title: '5 Lions megaways',
            },
            userName: '@user23231094',
            winnings: '0.00000345',
            currencyIcon: BitcoinIcon
        },
        {},
        {},
    ]);

    return (
        <View style={styles.winners}>
            <View style={styles.menuList}>
                <Pressable style={[styles.menuPressable, styles.menuPressableActive]}>
                    <Text style={styles.menuItem}>Top Winners</Text>
                </Pressable>
                <Pressable style={styles.menuPressable}>
                    <Text style={styles.menuItem}>Last</Text>
                </Pressable>
            </View>
            <ScrollView 
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.scrollWinners}>
                    {
                        winners.map((item, index) => <WinnersItem 
                                                        key={index}
                                                        gameImage={item?.game?.image}
                                                        userName={item?.userName}
                                                        gameTitle={item?.game?.title}
                                                        currencyIcon={item?.currencyIcon}
                                                    />)
                    }
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    winners: {
        backgroundColor: '#011C2D',
        borderRadius: 8,
        gap: 8,
        marginHorizontal: 8,
        paddingVertical: 8,
    },
    menuList: {
        flexDirection: 'row',
        paddingHorizontal: 16,
    },
    gap: {
        width: 8,
    },
    menuItem: {
        fontFamily: 'MontserratBold',
        color: '#FFFFFF',
        fontSize: 10,
    },
    menuPressable: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF17',
    },
    menuPressableActive: {
        borderBottomColor: '#25E39A'
    },
    scrollWinners: {
        paddingHorizontal: 12,
        flexDirection: 'row',
        gap: 8,
    }
})