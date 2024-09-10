import { StyleSheet, View, Text, Pressable } from 'react-native';
import { CrossCheckboxIcon } from '../icons/CrossCheckboxIcon';
import { useState } from 'react';
export function DefaultCheckbox ({...props}){
    const [stateCheckbox, setStateCheckbox] = useState(false);
    const handleSetState = () => {
        setStateCheckbox(!stateCheckbox)
    }

    return (
        <View style={styles.checkBoxContain}>
            <Pressable
                style={styles.checkbox} 
                onPress={handleSetState}
            >
                <View style={styles.checkboxInside}>
                    {stateCheckbox && 
                        <CrossCheckboxIcon/>
                    }
                </View>
                
            </Pressable>
            <Text style={styles.checkboxLabel}>I have read and approve the User 
            Agrements & Privacy policy </Text>
        </View>
    )
}

const styles =  StyleSheet.create({
    checkBoxContain: {
        backgroundColor: '#011C2D',
        borderRadius: 8,
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
        padding: 16,
    },
    checkboxLabel: {
        fontFamily: 'MontserratRegular',
        color: '#CFDEEB',
        fontSize: 12,
        paddingRight: 100,
    },
    checkboxInside: {
        width: 22,
        height: 21,
    },
    checkbox: {
        borderRadius: 4,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#25E39A',
        alignItems: 'center',
        justifyContent: 'center',
        width: 22,
        height: 21,
      },
})