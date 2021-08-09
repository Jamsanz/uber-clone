import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native'
import {FlatList, Platform, Image} from 'react-native'
import { ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import { selectTravelTimeInformation } from '../slices/navSlice'

const data=[
    {
        id:'Uber-X-123',
        title:'UberX',
        multiplier:1,
        image:"https://links.papareact.com/3pn"
    },
    {
        id:'Uber-XL-456',
        title:'Uber XL',
        multiplier:1.2,
        image:"https://links.papareact.com/5w8"
    },
    {
        id:'Uber-LUX-789',
        title:'Uber LUX',
        multiplier:1.75,
        image:"https://links.papareact.com/7pf"
    }
]

const SURGE_CHARGE_RATE=1.5;
const RideOptionsCard = () => {
    const navigation=useNavigation();
    const [selected, setSelected]=useState(null);
    const travelTimeInformation=useSelector(selectTravelTimeInformation);
    return (
        <SafeAreaView style={tw`rounded-t-3xl bg-white flex-grow`}>
        <View style={tw` flex-row justify-between px-5`}>
         <TouchableOpacity 
        onPress={()=>{
            navigation.navigate("NavigateCard")
        }}
        style={Platform.OS ==="ios" && tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
        >
            <Icon 
                name="chevron-left"
                type="font-awesome"
                color="black"
            />
        </TouchableOpacity>
       
        <Text style={tw`text-center ${Platform.OS ==='ios' && 'py-5'} text-xl`}>Select a Ride{ travelTimeInformation && " - "+ travelTimeInformation.distance.text}</Text>
        <Text style={tw`text-center py-5 text-xl`}></Text>
        </View>
        
        <FlatList 
            data={data}
            keyExtractor={(item)=>item.id}
            renderItem={({item:{id,title, multiplier, image}, item})=>(
                <TouchableOpacity 
                style={tw`flex-row justify-between items-center px-10 ${id===selected?.id && 'bg-gray-200'}`}
                onPress={()=>{
                    setSelected(item)
                }}
                >
                    <Image
                        style={{height:100, width:100, resizeMode:'contain'}}
                        source={{
                            uri:image
                        }}
                    />
                    <View style={tw`-ml-6`}>
                        <Text style={tw`text-xl font-semibold`}>{title}</Text>
                        <Text>{travelTimeInformation?.duration.text}</Text>
                    </View>
                    <Text style={tw`text-xl`}>₦{parseInt((travelTimeInformation?.duration?.value*SURGE_CHARGE_RATE*multiplier)/500)*500}</Text>
                </TouchableOpacity>
            )}
        />
            <View style={tw`mt-auto border-t border-gray-200`}>
            <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 mb-3 mx-3 ${!selected && 'bg-gray-300'}`}>
                <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
            </TouchableOpacity>
            </View>
 
        </SafeAreaView>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({})
