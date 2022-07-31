import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Screen from '../components/Screen'
import Constants from 'expo-constants'
import { Icon } from 'react-native-elements'
import tailwind from 'tailwind-react-native-classnames'

const EatsScreen = () => {
    const navigation = useNavigation()

    return (
        <Screen style={tw`bg-white h-full justify-center`}>
            <TouchableOpacity
                style={[tailwind`bg-white p-3 rounded-full shadow-lg`, { top: Constants.statusBarHeight, left: 20, position: 'absolute', zIndex: 100 }]}
                onPress={() => navigation.goBack()}
            >
                <Icon
                    type="antdesign"
                    name="home"
                    color="black"
                    size={16}
                // style={}
                />
            </TouchableOpacity>
            <View style={tailwind`items-center`}>
                <Text>Uber Eats</Text>
                <Text>Coming soon!</Text>
            </View>
        </Screen>
    )
}

export default EatsScreen
