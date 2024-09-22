import { View, StyleSheet, Dimensions, ScrollView } from "react-native"
import PagerBanner from "../components/pager-banner/PagerBanner";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Winners } from "../components/winners/Winners";
import { GameGroupBlock } from "../components/game-group/GameGroupBlock";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export function HomeScreen ({...props}) {
    const insets = useSafeAreaInsets();
    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={styles.scrollView}
            alwaysBounceVertical
        >
            <View style={[styles.container, {paddingTop: insets.top + 66, paddingBottom: insets.bottom + 100}]}>
                <PagerBanner/>
                <View style={styles.screenBlock}>
                    <Winners/>
                    <GameGroupBlock searchIsShow/>
                    <GameGroupBlock/>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
    },
    screenBlock: {
        gap: 16,
        paddingHorizontal: 12,
    },
    scrollView: {
        backgroundColor: '#031329',
        marginHorizontal: 0,
        height: windowHeight,
    }
})