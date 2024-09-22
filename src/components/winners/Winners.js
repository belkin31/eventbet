import { StyleSheet, View, Text, Pressable, ScrollView, FlatList } from "react-native"
import { WinnersItem } from "./WinnersItem";
import { BitcoinIcon } from "../icons/currency/BitcoinIcon"
import { useState } from 'react';
import {useTranslation} from "react-i18next";

export function Winners ({...props}) {
    const {t} = useTranslation()
    const [winners, setWinners] = useState([
        {
            game: {
                image: require('../../../assets/img/cover/5-Lions-Megaways 2.png'),
                title: '5 Lions megaways',
            },
            userName: '@user23231094',
            amount: '0.00000345',
            currencyIcon: BitcoinIcon
        },
        {
            game: {
                image: require('../../../assets/img/cover/Barn-Festival 2.png'),
                title: 'Barn Festival',
            },
            userName: '@user5435437',
            amount: '0.0000067',
            currencyIcon: BitcoinIcon
        },
        {
            game: {
                image: require('../../../assets/img/cover/Drago-Jewels-of-fortune.png'),
                title: 'Drago Jewels Of Fortune',
            },
            userName: '@user5435437',
            amount: '0.0000067',
            currencyIcon: BitcoinIcon
            
        },
    ]);

    return (
        <View style={styles.winners}>
            <View style={styles.menuList}>
                <Pressable style={[styles.menuPressable, styles.menuPressableActive]}>
                    <Text style={styles.menuItem}>{t('topWinners')}</Text>
                </Pressable>
                <Pressable style={styles.menuPressable}>
                    <Text style={styles.menuItem}>{t('lastWinners')}</Text>
                </Pressable>
            </View>
            <ScrollView 
                horizontal
                alwaysBounceHorizontal
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
                                                        amount={item?.amount}
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