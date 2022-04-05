import React from "react"

import { Text,SafeAreaView,View, FlatList,Image,StatusBar} from "react-native"

import { COLORS,FONTS,SHADOWS,SIZES,assets } from "../constants"

import { FocusedStatusBar,CircleButton,RectButton,DetailsBid,DetailsDesc,SubInfo } from "../components"


const DetailsHeader = ({data,navigation})=>{

  return(
    <View style={{width:'100%',height:350}}>
      <Image source={data.image} resizeMode='cover' style={{width:'100%',height:'100%'}}/>

      <CircleButton imgUrl={assets.left} top={StatusBar.currentHeight+10} left={15} handlePress={()=>navigation.goBack()}/>
      <CircleButton imgUrl={assets.heart} top={StatusBar.currentHeight+10} right={15}/>

    </View>
  )

}

const Details = ({route,navigation}) => {

  const {data} = route.params


  return (
    <SafeAreaView style={{flex:1}}> 
      <FocusedStatusBar backgroundColor='transparent' barStyle='dark-content' translucent={true}/>

      <View style={{
        width:'100%',
        position:'absolute',
        bottom:0,
        justifyContent:'center',
        alignItems:'center',
        zIndex:1,
        paddingVertical:SIZES.font,
        backgroundColor:'rgba(255,255,255,0.7)'
      }}>
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark}/>
      </View>  

      <FlatList data={data.bids}
      renderItem={({item})=><DetailsBid data={item} />}
      keyExtractor={(item)=>item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom:SIZES.extraLarge*3}}
      ListHeaderComponent={()=>(
        <React.Fragment>
          <DetailsHeader data={data} navigation={navigation}/>
          <SubInfo data={data.bids}/>
          <View style={{padding:SIZES.font}}>
            <DetailsDesc data={data} />
            <Text style={{
          fontFamily:FONTS.semiBold,
          fontSize:SIZES.medium,
        }}>Current Bids</Text>
          </View>
        </React.Fragment>
      )}
      />

    </SafeAreaView>   
  )
}

export default Details