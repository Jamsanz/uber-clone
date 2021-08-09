import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { Icon } from 'react-native-elements'
import { useDispatch,useSelector } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { setDestination,selectOrigin } from '../slices/navSlice'

const data=[
    {
        id:"123",
        icon:"home",
        location:"Home",
        loc: {
            "lat": 9.0474023,
            "lng": 7.408555600000001,
          },
        destination:"F9 Street, Abuja, Nigeria"
    },
    {
        id:"456",
        icon:"briefcase",
        location:"Work",
        loc:{
            "lat": 9.0762449,
            "lng": 7.5009476,
          },
        destination:"29 Usuma Street, Abuja, Nigeria"
    }
]
const NavFavorites = () => {
    const dispatch=useDispatch();
    const navigation=useNavigation();
    const origin=useSelector(selectOrigin);
    return (
       <FlatList
            data={data}
            keyExtractor={(item)=>item.id}
            ItemSeparatorComponent={()=>(
                <View 
                    style={[tw`bg-gray-200`,{
                        height:0.5
                    }]}
                />
            )}
            renderItem={({item:{location,destination,icon,loc}})=>(
                <TouchableOpacity
                onPress={()=>{
                    dispatch(setDestination({
                        location:loc,
                        description:destination}));
                        origin && navigation.navigate("RideOptionsCard");
                }}
                 style={tw`flex-row items-center p-5`} 
                 >
                    <Icon
                    style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                    name={icon}
                    type="ionicon"
                    color="white"
                    size={18}
                     />
                     <View>
                         <Text style={tw`font-semibold text-lg`}>{location}</Text>
                         <Text style={tw`text-gray-500 `}>{destination}</Text>
                     </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavFavorites

const styles = StyleSheet.create({})
