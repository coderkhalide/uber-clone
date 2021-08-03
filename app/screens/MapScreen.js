import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import tailwind from 'tailwind-react-native-classnames'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import NavFavourites from '../components/NavFavourites'
import MapNavigator from '../navigation/MapNavigator'
import { selectOrigin } from '../redux/slices/navSlice'

const MapScreen = () => {
    const origin = useSelector(selectOrigin)
    const navigation = useNavigation()

    useEffect(() => {
        if(!origin) navigation.replace('Home')
    }, [])

    return (
        <View style={tw`bg-white h-full`}>
            <View style={tailwind`h-1/2`}>
                <Map />
            </View>
            <View style={tailwind`h-1/2`}>
                <MapNavigator />
            </View>
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({})
