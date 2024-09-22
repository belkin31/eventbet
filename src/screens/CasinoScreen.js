import { View, StyleSheet, Dimensions, ScrollView, Text } from "react-native"
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export function CasinoScreen ({...props}) {
    const insets = useSafeAreaInsets();

    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            alwaysBounceVertical
            style={styles.scrollView}
        >
            <View style={[styles.container, {paddingTop: insets.top + 66}]}>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
    },
    screenBlock: {
        paddingHorizontal: 16
    },
    scrollView: {
        backgroundColor: '#031329',
        marginHorizontal: 0,
        height: windowHeight,
    }
})