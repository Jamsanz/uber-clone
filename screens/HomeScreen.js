import React from 'react'
import NavOptions from '../components/NavOptions';
import { StyleSheet, Text, SafeAreaView, View, StatusBar, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_API} from "@env"
import { useDispatch } from 'react-redux';
import { setOrigin, setDestination } from '../slices/navSlice';
import NavFavorites from '../components/NavFavorites';
const HomeScreen = () => {
 const dispatch = useDispatch();

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={{
                        width:100,
                        height:100, 
                        resizeMode:"contain"
                    }}
                source={{
                    uri:"https://links.papareact.com/gzs"
                }} />
                <GooglePlacesAutocomplete
                nearbyPlacesAPI="GooglePlacesSearch"
                styles={{
                    container:{
                        flex:0
                    },
                    textInput:{
                        fontSize:18
                    }
                }}
                fetchDetails={true}
                onPress={(data, details=null)=>{
                    dispatch(setOrigin({
                        location:details.geometry.location,
                        description:data.description
                    }));
                    dispatch(setDestination(null))
                }}
                enablePoweredByContainer={false}
                minLength={2}
                debounce={400}
                placeholder="Where from?"
                query={{
                    key:GOOGLE_MAPS_API,
                    language:'en'
                }}
                 />

                <NavOptions />
                <NavFavorites />
            </View>
        </SafeAreaView>
    )
}
export default HomeScreen

const styles = StyleSheet.create({});

