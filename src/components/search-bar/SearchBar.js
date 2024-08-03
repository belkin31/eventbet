import { View, StyleSheet, Text } from "react-native";
import { DefaultButton } from "../buttons/DefaultButton";
import { SearchIcon } from '../icons/SearchIcon'
export function SearchBar({...props}) {
    return (
        <View style={styles.searchBar}>
            <View style={styles.searchInput}>
                <View style={styles.searchIcon}>
                    <SearchIcon/>
                </View>
                <Text style={styles.searchLabel}>Search for Game</Text>
            </View>
            <DefaultButton>
                    <Text style={styles.buttonText}>Search</Text>
            </DefaultButton>
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        flexDirection: 'row',
        gap: 8,
        paddingHorizontal: 8,
    },
    searchIcon: {
        width: 12,
        height: 12
    },
    searchLabel: {
        fontFamily: 'MontserratBold',
        color: '#FFFFFF91',
        fontSize: 10
    },
    searchInput: {
        borderRadius: 8,
        paddingHorizontal: 16,
        backgroundColor: '#011C2D',
        height: 35,
        flex: 3,
        gap: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonText: {
        fontFamily: 'MontserratBold',
        color: '#FFFFFF',
        fontSize: 12,
    }
})