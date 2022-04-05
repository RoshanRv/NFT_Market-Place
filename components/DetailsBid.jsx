import { View, Text,Image } from 'react-native'
import React from 'react'

import { SIZES,COLORS,FONTS } from '../constants'
import { ETHPrice } from './SubInfo'

const DetailsBid = ({data}) => {
  return (
    <View style={{
      paddingHorizontal:SIZES.font,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      paddingVertical:SIZES.small*0.7,

      
      }}>
      <Image source={data.image} resizeMode='contain' style={{width:60,height:60}}/>
      <View style={{justifyContent:'center',flexDirection:'column'}}>
        <Text style={{fontFamily:FONTS.semiBold,}}>Bet Placed By {data.name}</Text>
        <Text style={{fontSize:SIZES.small,color:COLORS.secondary}}>{data.date}</Text>
      </View>
      <ETHPrice data={data.price}/>
    </View>
  )
}

export default DetailsBid
