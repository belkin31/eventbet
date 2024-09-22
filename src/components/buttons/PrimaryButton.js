import { Pressable, StyleSheet } from "react-native"
export function PrimaryButton ({...props}) {

    const HandlePress = (event) => {
        props?.onPress?.(event);
    }

    return (
        <Pressable onPress={HandlePress} style={styles.defaultButton}>
            {props.children}
        </Pressable>
    )
}
const styles = StyleSheet.create({
    defaultButton: {
        backgroundColor: '#173243',
        borderRadius: 8,
        padding: 12,
        flex: 1,
        justifyContent: 'center'
    },
})