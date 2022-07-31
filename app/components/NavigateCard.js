import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import tailwind from 'tailwind-react-native-classnames'
import Screen from './Screen'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAP_APIKEY } from '@env'
import { setDestination } from '../redux/slices/navSlice'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import NavFavourites from './NavFavourites'
import { Icon } from 'react-native-elements'

// const GOOGLE_MAP_APIKEY = ""

const NavigateCard = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()

    return (
        <Screen style={tailwind`bg-white flex-1`}>
            <Text style={tailwind`text-center pb-5 text-xl font-bold`}>Good morning, Khalid</Text>
            <View style={tailwind`border-t border-gray-100 flex-shrink relative z-20 bg-white`}>
                <View style={tailwind`bg-white pb-2`}>
                    <GooglePlacesAutocomplete
                        placeholder='Where to?'
                        nearbyPlacesAPI="GooglePlacesSearch"
                        debounce={400}
                        onPress={(data, details = null) => {
                            dispatch(setDestination({
                                loaction: details.geometry.location,
                                description: data.description
                            }))
                        }}
                        minLength={2}
                        fetchDetails={true}
                        returnKeyType={"search"}
                        onFail={error => console.error(error)}
                        query={{
                            key: GOOGLE_MAP_APIKEY,
                            language: 'en',
                        }}
                        styles={toInputBoxStyles}
                        enablePoweredByContainer={false}
                    />
                </View>
            </View>
            <View style={tailwind`px-3 bg-white relative z-10 justify-between flex-1`}>
                <NavFavourites />
                <View style={tailwind`mt-3 flex-row justify-evenly py-3 border-t border-gray-100`}>
                    <TouchableOpacity
                        style={tailwind`flex-row bg-white w-24 px-4 py-3 rounded-full border border-black`}
                    >
                        <Icon name="fast-food-outline" type="ionicon" color="black" size={16} />
                        <Text style={tailwind`text-black text-center pl-3`}>Food</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={tailwind`flex-row bg-black w-24 px-4 py-3 rounded-full border border-black`}
                        onPress={() => navigation.push('RideOptionsCard')}
                    >
                        <Icon name="car" type="font-awesome" color="white" size={16} />
                        <Text style={tailwind`text-white text-center pl-3`}>Ride</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Screen>
    )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: '#fff',
        paddingTop: 20,
    },
    textInput: {
        fontSize: 15,
        backgroundColor: '#F4F4F4',
        borderRadius: 5,
        borderEndWidth: 1,
        borderColor: '#ddd'
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0
    }
})
