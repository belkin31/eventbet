import { Text, TextInput, StyleSheet, View, Pressable } from 'react-native';
export function PhoneInput({
    onInput,
    onPressRegion,
    ...props
  }) {

    const HandleInput = (event) => {
        onInput(event, props.name);
    };

    const HandlePressRegion = () => {
        onPressRegion();
    };

    return (
        <View style={styles.container}>
            <Pressable style={styles.country} onPress={HandlePressRegion}>
                <Text style={styles.code}>+{props.code}</Text>
            </Pressable>
            <TextInput 
                value={props.value}
                onChangeText={HandleInput}
                keyboardType = 'numeric'
                style={styles.input}
                placeholder={props?.placeholder}
                onFocusHandler={props?.isFocus}
                placeholderTextColor={styles.input.placeholderTextColor}
            />
        </View>
    );
}

const styles =  StyleSheet.create({
    container: {
        gap: 8,
        backgroundColor: '#011C2D',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    country: {
        padding: 18,
        paddingHorizontal: 4,
    },
    code: {
        color: '#FFFFFF85',
        fontSize: 12,
        fontFamily: "MontserratBold"
    },
    input: {
        borderLeftWidth: 1,
        borderLeftColor: '#25E39A',
        padding: 18,
        paddingVertical: 8,
        flex: 1,
        fontSize: 12,
        fontFamily: "MontserratBold",
        placeholderTextColor: '#FFFFFF85'
    },
    label: {
        fontSize: 14,
        color: '#69696B',
        paddingHorizontal: 8,
        fontFamily: "MontserratRegular",
    }
})