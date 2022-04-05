import { Text,SafeAreaView,FlatList,View} from "react-native"
import {NFTData, COLORS} from '../constants'
import { useState } from "react"
import { FocusedStatusBar,HomeHeader,NFTCards } from "../components"

const Home = () => {

    const [nftData,setNftData]=useState(NFTData)

    const handleChange=(value)=>{
        if(!value.length)return setNftData(NFTData)

        const filteredData = NFTData.filter((item)=>item.name.toLowerCase().includes(value.toLowerCase()))

        if(filteredData.length)setNftData(filteredData)
        else setNftData(NFTData)
    }

  return (
    <SafeAreaView style={{flex:1}}>
        <FocusedStatusBar background={COLORS.primary}/>

        <View style={{flex:1}}>
            <View style={{zIndex:0}}>
                <FlatList 
                data={nftData}
                renderItem={({item})=><NFTCards data={item} />}
                keyExtractor={(item)=>item.id}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<HomeHeader handleChange={handleChange}/>}
                />
            </View>
        </View>

        <View style={{position:'absolute',top:0,left:0,right:0,bottom:0, zIndex:-1 }} >
            <View style={{height:300, backgroundColor:COLORS.primary}} />
            <View style={{flex:1, backgroundColor:COLORS.white,}} />
        </View>

    </SafeAreaView>
  )
}

export default Home