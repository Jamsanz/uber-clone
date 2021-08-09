import { useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'

const MapScreen = () => {
    const Stack= createStackNavigator();
    const navigation=useNavigation();
    return (
        <View>
        <TouchableOpacity 
        style={tw`bg-gray-100 absolute top-8 left-4 z-50 p-3 rounded-full shadow-lg`}
        onPress={()=>navigation.navigate('HomeScreen')}
        >
            <Icon 
                name="menu"
            />
        </TouchableOpacity>
        <View style={tw`h-1/3`}>
        <Map />
        </View>
        <View style={tw`h-2/3 rounded-t-3xl`}>
        <Stack.Navigator>
            <Stack.Screen
            name="NavigateCard"
            component={NavigateCard} 
            options={{
                headerShown:false
            }}
            />
            <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard} 
            options={{
                headerShown:false
            }}
            />
        </Stack.Navigator>
        </View>
        
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({})
