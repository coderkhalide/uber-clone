import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { useDispatch } from 'react-redux'
import tailwind from 'tailwind-react-native-classnames'

const data = [
    {
        id: '3423',
        icon: 'home',
        location: 'Home',
        destination: "Code street, London, UK"
    },
    {
        id: '36567',
        icon: 'briefcase',
        location: 'Work',
        destination: "Londone Eye, London, UK"
    },
]

const NavFavourites = () => {
    const dispatch = useDispatch()

    const handlePress = () => {

    }

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <TouchableOpacity 
                    style={tailwind`flex-row items-center py-3`}
                    onPress={handlePress}
                >
                    <Icon 
                        style={tailwind`mr-4 rounded-full bg-gray-300 p-3`}
                        name={item.icon}
                        type="feather"
                        color="white"
                        size={18}
                    />
                    <View>
                        <Text style={tailwind`font-bold text-lg`}>{item.location}</Text>
                        <Text style={tailwind`text-gray-500`}>{item.destination}</Text>
                    </View>
                </TouchableOpacity>
            )}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={() => (
                <View
                    style={[tailwind`bg-gray-200`, { height: 0.5 }]}
                />
            )}
      />
    )
}

export default NavFavourites

const styles = StyleSheet.create({})
