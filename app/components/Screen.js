import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import Constants from 'expo-constants'

export default function Screen({children, style }) {
    return (
        <SafeAreaView style={[styles.container, style]}>
            <View style={[styles.view, style]}>
                {children}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        flex: 1
    },
    view: {
        // flex: 1
    }
})
