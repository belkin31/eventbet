import { View, Text, StyleSheet, Image, Animated} from "react-native"
import { BitcoinIcon } from "../icons/currency/BitcoinIcon"
import { useState, useRef, useEffect } from 'react';
export function WinnersItem ({...props}) {
    const [fadeAnim] = useState(new Animated.Value(0));
    const scaleAnim = useRef(new Animated.Value(0.9)).current;
    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 100,
            useNativeDriver: true
        }).start();
        Animated.timing(
            scaleAnim,
            {
              toValue: 1,
              duration: 200,
              useNativeDriver: true
            }            
         ).start();
    }, []);
    return (
        <Animated.View style={[styles.winnerItem, {
            opacity: fadeAnim,
            transform:[{scale:scaleAnim}]
          }]}>
            <View style={styles.game}>
                <Image style={styles.cover} source={props?.gameImage}/>
            </View>
            <View style={styles.winner}>
                <Text style={styles.userName}>{props?.userName}</Text>
                <Text style={styles.gameName}>{props?.gameTitle}</Text>
                <View style={styles.winAmount}>
                    <View style={styles.winCurrency}>
                        {props?.currencyIcon}
                    </View>
                    <Text style={styles.amount}>0.0000345</Text>
                </View>
            </View>
        </Animated.View>
    )   
}
const styles = StyleSheet.create({
    winnerItem: {
        backgroundColor: '#00141F',
        width: 132,
        padding: 4,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 4,
    },
    cover: {
        width: 43,
        height: 43,
        borderRadius: 8,
    },
    game: {
        flexBasis: 43
    },
    userName: {
        fontFamily: 'MontserratBold',
        fontSize: 8,
        color: '#FFFFFF45'
    },
    gameName: {
        fontFamily: 'MontserratBold',
        fontSize: 10,
        color: '#FFFFFF'
    },
    winner: {
        flex: 1,
        gap: 4,
    },
    winAmount: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    winCurrency: {
        width: 8,
        height: 8,
    },
    amount: {
        fontFamily: 'MontserratBold',
        fontSize: 8,
        color: '#FFFFFF'
    }
})