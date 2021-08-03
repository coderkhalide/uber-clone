import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Screen from '../components/Screen';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAP_APIKEY } from '@env'
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../redux/slices/navSlice';
import NavFavourites from '../components/NavFavourites';

const HomeScreen = () => {
    const dispatch = useDispatch()

    return (
        <Screen style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    source={{ uri: 'https://links.papareact.com/gzs' }}
                    style={styles.logo}
                />
                <View style={tw`mb-3`}>
                    <GooglePlacesAutocomplete
                        placeholder='Where from?'
                        nearbyPlacesAPI="GooglePlacesSearch"
                        debounce={400}
                        onPress={(data, details = null) => {
                            dispatch(setOrigin({
                                loaction: details.geometry.location,
                                description: data.description
                            }))
                            dispatch(setDestination(null))
                        }}
                        minLength={2}
                        fetchDetails={true}
                        returnKeyType={"search"}
                        onFail={error => console.error(error)}
                        query={{
                            key: GOOGLE_MAP_APIKEY,
                            language: 'en',
                        }}
                        styles={{
                            container: {
                                flex: 0,
                            },
                            textInput: {
                                fontSize: 15
                            }
                        }}
                        enablePoweredByContainer={false}
                    />
                </View>
                <NavOptions />
                <NavFavourites />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    logo: {
        height: 50,
        width: 100,
        resizeMode: 'contain',
        marginBottom: 20
    }
})

export default HomeScreen;
